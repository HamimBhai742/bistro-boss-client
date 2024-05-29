import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useSucre from '../../../hooks/useSucre';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';

const CheakOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosSucre = useSucre()
    const [cart, refetch] = useCart()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (cart.length > 0) {
            axiosSucre.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error?.message}`,
            });
        } else {
            console.log('[PaymentMethod]', paymentMethod);

        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName,
                    email: user.email
                }

            }

        })
        if (confirmError) {
            console.log('errrrrr', confirmError);
        }
        else {
            console.log('pay success', paymentIntent);
            console.log(paymentIntent.id);
            if (paymentIntent.status === "succeeded") {
                const currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                const currentDate = new Date().toISOString().slice(0, 10).split('-').reverse().join('-')
                const currentDateAndTime = currentDate + " " + " " + " " + currentTime
                const paymentHes = {
                    email: user.email,
                    price: totalPrice,
                    date: currentDateAndTime,
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(c => c._id),
                    status: 'pending'
                }
                const res = await axiosSucre.post('/payment', paymentHes)
                console.log(res.data);
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your payment have been successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='px-12'>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '20px',
                                    color: '#424770',
                                    fontFamily: 'inter',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#570DF8] my-7  text-white w-48 rounded-lg py-2 font-inter text-xl font-bold' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheakOut;