import React from 'react';
import img1 from '../../../assets/others/authentication1.png'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { userRegister } = useAuth()
    const navigate = useNavigate()
    const handelSingUpBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, password);
        userRegister(email, password)
            .then(res => {
                console.log(res.user);
                updateProfile(res.user, {
                    displayName: name, photoURL: photo
                })
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mx-12 mt-10 '>
            <div className="hero bg-base-100 px-8 shadow-2xl rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">
                        <img className='w-[700px]' src={img1} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-md bg-base-100 font-inter">
                        <h3 className='text-4xl font-bold text-center'>Sign Up</h3>
                        <form className="card-body" onSubmit={handelSingUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo</span>
                                </label>
                                <input type="url" placeholder="Enter Your Photo Url" name='photo' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered" />
                            </div>
                            <input type="submit" className="btn bg-[#D1A054] text-xl text-white font-bold mt-5" value="Sign Up" />
                        </form>
                        <p className='text-[#D1A054] text-xl font-medium text-center'>Already registered? <Link to='/login' className='font-bold hover:underline'>Go to log in</Link></p>
                        <p className='text-xl font-medium text-center mt-2'>Or sign in with</p>
                        <div className='text-3xl flex gap-12 justify-center mt-5 '>
                            <FaFacebook></FaFacebook>
                            <FaGoogle></FaGoogle>
                            <FaGithub></FaGithub>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;