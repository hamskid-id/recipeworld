import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { authActions } from './store/authSlice';


export const RegisterPage = ()=>{

    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(authActions.setLogIn());
    }
    return(
        <>
            <div className=' d-flex flex-column align-items-center  p-3 m-auto mt-5 '>
               
                        <div>
                        <p className='fw-bold fs-3 text-white'>Register</p>
                        </div>
                        <form className='  p-5 bg bg-white' >
                                <div>
                                    <label className='fw-bold fs-5' htmlFor="Name">Name</label>
                                    <p><input className='w-100 p-1' type="text" placeholder='enter your name' required/></p>
                                </div>
                                <div>
                                    <label className='fw-bold fs-5' htmlFor="email">Email</label>
                                    <p><input className='w-100 p-1' type="text" placeholder='enter your email' required /></p>
                                </div>
                                <div >
                                    <label className='fw-bold fs-5' htmlFor="Password">Password</label>
                                    <p><input className='w-100 p-1' type="number" placeholder='enter your password' required/></p>
                                </div>
                                <div >
                                    <label className='fw-bold fs-5' htmlFor="Cpassword">Confrim Password</label>
                                    <p><input className='w-100 p-1' type="number" placeholder='confirm your password' required/></p>
                                </div>
                                <div>
                                    <p><button type='submit' onSubmit={handleSubmit} className='btn btn-md btn-success w-100 m-auto'>Register</button></p>
                                </div>
                                <p className='fw-bold fs-5'>Have an account? <Link className='text-danger' to='/loginpage'>Log In</Link></p>

                        </form>
           
            </div>
           
        </>
    )
}