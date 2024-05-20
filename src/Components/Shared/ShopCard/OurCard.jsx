import React from 'react';

const OurCard = ({ item }) => {
    const { image, recipe, price, name } = item
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
                        <button className="btn bg-[#E8E8E8] border-b-2 border-b-[#BB8506] text-[#BB8506] uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCard;