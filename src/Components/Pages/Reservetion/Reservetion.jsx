import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheakOut from './CheakOut';
const stripePromise = loadStripe(import.meta.env.VITE_API_PAY);
const Reservetion = () => {

    return (
        <div>
            <h3 className='font-inter text-4xl text-center my-5'>PAYMENT</h3>
            <Elements stripe={stripePromise}>
                <CheakOut></CheakOut>
            </Elements>
        </div>
    );
};

export default Reservetion;