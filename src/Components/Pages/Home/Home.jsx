import React from 'react';
import Banner from './Banner';
import KeenDadu from './KeenDadu';
import Header from './Header';
import Contact from './Contact';
import Card from './Card';
import Banner2 from './Banner2';

const Home = () => {
    return (
        <div className='font-inter'>
            <Banner></Banner>
            <div className='mt-5'>
                <p className='text-xl text-center text-[#D99904] italic'> ---From 11:00am to 10:00pm---</p>
                <div className='border-b-2 w-64 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>ORDER ONLINE</h3>
                <div className='border-b-2 w-64 mx-auto mb-3'></div>
            </div>
            <KeenDadu></KeenDadu>
            <Header></Header>
            <div className='mt-8'>
                <p className='text-xl text-center text-[#D99904] italic'> ---Check it out---</p>
                <div className='border-b-2 w-64 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>FROM OUR MENU</h3>
                <div className='border-b-2 w-64 mx-auto mb-3'></div>
            </div>
            <Contact></Contact>
            <div className='mt-8'>
                <p className='text-xl text-center text-[#D99904] italic'> ---Should Try---</p>
                <div className='border-b-2 w-64 mx-auto mt-5'></div>
                <h3 className='text-center text-[#151515] text-4xl my-3'>CHEF RECOMMENDS</h3>
                <div className='border-b-2 w-64 mx-auto mb-3'></div>
            </div>
            <Card></Card>
            <Banner2></Banner2>
        </div>

    );
};

export default Home;