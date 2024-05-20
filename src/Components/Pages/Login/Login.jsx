import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../../assets/others/authentication1.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { userLogin } = useAuth()
    const navigate = useNavigate()
    const [disabled, setDisabled] = useState(true)
    const captchatRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelValidatedBtn = (e) => {
        e.preventDefault()
        const user_captcha_value = captchatRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    const handelLoginBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        userLogin(email, password)
            .then(res => {
                console.log(res.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mx-12 mt-10 '>
            <div className="hero bg-base-100 px-8 shadow-2xl rounded-lg">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center lg:text-left">
                        <img className='w-[700px]' src={img1} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-md bg-base-100 font-inter">
                        <h3 className='text-4xl font-bold text-center'>Login</h3>
                        <form onSubmit={handelLoginBtn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label" id='llss'>
                                    < LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchatRef} placeholder="Type Here" name='captca' className="input input-bordered" />
                                <button onClick={handelValidatedBtn} className='btn btn-outline my-3'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn bg-[#D1A054] text-xl text-white font-bold">Sign In</button>
                            </div>
                        </form>
                        <p className='text-[#D1A054] text-xl font-medium text-center'>New here? <Link to='/register' className='font-bold hover:underline'>Create a New Account</Link></p>
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

export default Login;