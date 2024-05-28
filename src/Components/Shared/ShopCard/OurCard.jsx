import React from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const OurCard = ({ item }) => {
    const { image, recipe, price, name } = item
    const { user } = useAuth()
    const [, refetch] = useCart()
    const handelAddToCartBtn = carts => {
        carts.userName = user?.displayName
        carts.userEmail = user?.email
        delete carts._id
        console.log(carts);

        axios.post('http://localhost:5000/cart', carts)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Item  Add To Cart",
                    showConfirmButton: false,
                    timer: 1000
                });
                refetch()
            })
    }
    return (
        <div>
            <div className="card w-96 bg-[#F3F3F3] font-inter relative">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-t-xl w-full" />
                </figure>
                <p className='absolute right-8 top-7 bg-[#111827] px-3 py-1 text-white font-inter font-semibold'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-semibold">{name}</h2>
                    <p>{recipe.slice(0, 70)}...</p>
                    <div className="card-actions">
                        <button onClick={() => handelAddToCartBtn(item)} className="btn bg-[#E8E8E8] border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCard;