import React from 'react';
import { Link } from 'react-router-dom';

const OrderBtn = ({value,titel}) => {
    return (
        <div>
            <div className='flex justify-center my-5'>
                <Link to={`/our-shop/${titel}`} className='border-b-4 border-[#1F2937] font-inter text-xl font-medium rounded-lg btn btn-outline border-0 uppercase'>{value}</Link>
            </div>
        </div>
    );
};

export default OrderBtn;