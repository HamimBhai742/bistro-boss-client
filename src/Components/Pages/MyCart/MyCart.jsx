import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice);
    const navigaet = useNavigate()
    const handelMyCartDeleteBtn = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/cart/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });

    }
    const handelPaymentBtn = () => {
        console.log('pay');
        navigaet('/dasboard/reservation')
    }
    return (
        <div>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---My Cart---</p>
                <div className='border-b-2 w-96 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>WANNA ADD MORE?</h3>
                <div className='border-b-2 w-96 mx-auto mb-3'></div>
            </div>
            <div className='bg-[#FFF] px-12 mt-12'>
                <div className='font-cinzel flex justify-between'>
                    <h3 className='font-bold text-3xl'>Total orders: <span>{cart.length}</span></h3>
                    <h3 className='font-bold text-3xl'>total price: <span>${totalPrice}</span></h3>
                    <button onClick={handelPaymentBtn} disabled={!cart.length} className='btn bg-[#D1A054] text-white font-bold  text-xl px-3 py-2 rounded-md'>Pay</button>
                </div>
                <div className="overflow-x-auto mt-5 font-inter">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] rounded-3xl text-white'>
                            <tr>
                                <th>Sl. No.</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((crt, idx) => <tr className='text-[#737373]' key={idx}>
                                    <th>{idx + 1}</th>
                                    <td><img className='w-16 rounded-lg h-14' src={crt?.image} alt="" /></td>
                                    <td>{crt?.name}</td>
                                    <td>${crt?.price}</td>
                                    <td><button onClick={() => handelMyCartDeleteBtn(crt._id)} className='bg-[#B91C1C] p-3 w-12 rounded-lg text-white text-xl'><RiDeleteBin6Line></RiDeleteBin6Line></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;