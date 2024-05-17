import React from 'react';
import img1 from '../../../assets/home/featured.jpg'
const Banner2 = () => {
    return (
        <div className='bannner2 my-8'>
            <div className='pt-8'>
                <p className='text-xl text-center text-[#D99904] italic'> ---Should Try---</p>
                <div className='border-b-2 w-64 mx-auto mt-5'></div>
                <h3 className='text-center text-white text-4xl my-3'>CHEF RECOMMENDS</h3>
                <div className='border-b-2 w-64 mx-auto mb-3'></div>
            </div>

            <div className='flex p-16 gap-6 items-center'>
                <img src={img1} className='w-96' alt="" />
                <div className='text-white font-inter'>
                    <h3 className='text-2xl'>March 20, 2023</h3>
                    <h4 className='text-xl mt-3'>WHERE CAN I GET SOME?</h4>
                    <p className='mt-3 max-w-[580px]'>Bistros typically have a limited menu of reasonably priced dishes, made with fresh, seasonal ingredients. The focus is on quality, not quantity. Bistros often have a casual atmosphere, with simple décor and limited seating.</p>
                    <button className='rounded-lg p-3 border-b-2 border-b-[#FFF] text-[#FFF] uppercase '>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;