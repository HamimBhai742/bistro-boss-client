import React, { useState } from 'react';
import { FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { FaBook, FaBookTanakh, FaShop, FaUser, FaUsers, FaUtensils } from 'react-icons/fa6';
import { MdEmail, MdHome, MdMenu, MdPayment, MdReviews } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { TfiMenuAlt } from 'react-icons/tfi';
import useAdmin from '../../hooks/useAdmin';

const Dasboard = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    console.log(cart);
    return (
        <div className='flex'>
            <div className='bg-[#D1A054] w-[280px] min-h-screen fixed '>
                <div className='font-cinzel text-center pt-8'>
                    <h3 className='text-2xl font-[900]'>BISTRO BOSS</h3>
                    <h5 className='text-lg font-bold tracking-widest'>Restaurant</h5>
                </div>
                <div className='font-cinzel font-medium flex flex-col p-8 mt-5 gap-3' id='das'>
                    <NavLink to='/dasboard/user' className='flex items-center gap-2'><span className='text-2xl'><MdHome></MdHome></span> User Home</NavLink>
                    {isAdmin ?
                        <>
                            <NavLink to='/dasboard/add-items' className='flex items-center gap-2'><span className='text-2xl'><FaUtensils></FaUtensils></span>add items</NavLink>
                            <NavLink to='/dasboard/manage-items' className='flex items-center gap-2'><span className='text-2xl'><TfiMenuAlt></TfiMenuAlt></span> manage items</NavLink>
                            <NavLink to='/dasboard/manage-bookings' className='flex items-center gap-2'><span className='text-2xl'><FaBook></FaBook></span> Manage bookings</NavLink>
                            <NavLink to='/dasboard/all-users' className='flex items-center gap-2'><span className='text-2xl'><FaUsers></FaUsers></span> all users</NavLink>
                        </>
                        :
                        <>
                            <NavLink to='/dasboard/reservation' className='flex items-center gap-2'><span className='text-2xl'><FaCalendarAlt></FaCalendarAlt></span> reservation</NavLink>
                            <NavLink to='/dasboard/payment' className='flex items-center gap-2'><span className='text-2xl'><MdPayment></MdPayment></span> payment history</NavLink>
                            <NavLink to='/dasboard/my-cart' className='flex items-center gap-2'><span className='text-2xl'><FaShoppingCart></FaShoppingCart></span> my cart ({cart?.length})</NavLink>
                            <NavLink to='/dasboard/add-review' className='flex items-center gap-2'><span className='text-2xl'><MdReviews></MdReviews></span> add review</NavLink>
                            <NavLink to='/dasboard/add-booking' className='flex items-center gap-2'><span className='text-2xl'><FaBookTanakh></FaBookTanakh></span> my booking</NavLink></>
                    }
                </div>
                <div className="divider px-8"></div>
                <div className='font-cinzel font-medium flex flex-col px-8 py-4 gap-3' id='das'>
                    <Link to='/' className='flex items-center gap-2'><span className='text-2xl'><MdHome></MdHome></span>Home</Link>
                    <Link to='/our-menu' className='flex items-center gap-2'><span className='text-2xl'><MdMenu></MdMenu></span>Menu</Link>
                    <Link to='/our-shop/salad' className='flex items-center gap-2'><span className='text-2xl'><FaShop></FaShop></span>Shop</Link>
                    <Link to='/contact-us' className='flex items-center gap-2'><span className='text-2xl'><MdEmail></MdEmail></span>Contact</Link>
                </div>
            </div>
            <div className='flex-1 ml-72'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dasboard;