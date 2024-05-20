import React from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';
import { GiShoppingCart } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img11 from '../../assets/others/profile.png'

const Navbar = () => {
    const { logOut, user } = useAuth()
    const logOutUser = () => {
        logOut()
    }
    console.log(user);
    return (
        <div className="navbar bg-[#15151580] text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center gap-0'>
                    <p className="text-3xl font-extrabold font-cinzel">BISTRO BOSS</p>
                    <p className="text-2xl font-bold font-cinzel tracking-widest">Restaurant</p>
                </div>
            </div>
            <div className="navbar-end w-[900px]">
                <div className="hidden lg:flex mr-3">
                    <ul className="menu menu-horizontal px-1 gap-3 font-inter ">
                        <NavLink className='text-lg font-bold' to='/'>HOME</NavLink>
                        <NavLink className='text-lg font-bold' to='/contact-us'>CONTACT US</NavLink>
                        <NavLink className='text-lg font-bold' to='/dashboard'>DASHBOARD</NavLink>
                        <NavLink className='text-lg font-bold' to='/our-menu'>OUR MENU</NavLink>
                        <NavLink className='text-lg font-bold flex items-center' to='/our-shop/salad'>OUR SHOP <span className='text-2xl'><GiShoppingCart></GiShoppingCart></span></NavLink>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    {user ? <button onClick={logOutUser} className=" text-lg font-bold uppercase">Sign Out</button> : <Link to='/login' className="text-lg font-bold uppercase">Sign In</Link>}
                    <img className='w-12 h-12 rounded-full' src={user? user.photoURL: img11} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;