import React from 'react';
import {Link} from 'react-router-dom';
import { authActions } from './store/authSlice';
import { useDispatch } from 'react-redux';

export const LoginPage = ()=>{

    const dispatch = useDispatch();
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(authActions.setLogIn());
    }
    
    return(
        <>
            <div className=' d-flex flex-column align-items-center  p-3 m-auto mt-5'>
                <div>
                    <p className='fw-bold fs-3 text-white'>Log In</p>
                </div>
                <form className='  p-5 bg bg-white' >
                        
                        <div>
                            <label className='fw-bold fs-5' htmlFor="email">Email</label>
                            <p><input className='w-100 p-1' type="text" placeholder='enter your email' required /></p>
                        </div>
                        <div >
                            <label className='fw-bold fs-5'  htmlFor="Password">Password</label>
                            <p><input className='w-100 p-1' type="number" placeholder='enter your password' required/></p>
                        </div>
                        <div >
                            <p><button className='btn btn-md btn-success w-100 m-auto' onSubmit={handleSubmit}>Log In</button></p>
                        </div>
                        <p className='fw-bold fs-5'>No Accounts? <Link className='text-danger' to='/registerPage'>Register</Link></p>

                </form>
            </div>
        </>
    )
}