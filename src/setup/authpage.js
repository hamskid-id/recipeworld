import React from 'react';
import {Link} from 'react-router-dom';




export const AuthPage =()=>{
    return(
        <>
            <div className='border d-flex flex-column align-items-center  p-3 w-30 m-auto mt-5 '>
                <div className=' authImageWidth m-auto'>
                    <img className='w-100 rounded' src="/img/blog-img/insta4.jpg" alt="object not found"/>
                </div>
                <div>
                    <p className='text-center fs-5 mt-3 fw-bold'>Create an account or log In</p>
                </div>
                <div className='d-flex flex-column align-items-center w-75'>
                    <Link to='/registerpage' className='btn btn-md btn-danger w-100'>
                        Register
                    </Link>
                    <Link to='login' className='btn btn-md btn-success w-100 mt-3 mb-3'>
                        Log In
                    </Link>
                </div>
            </div>
        </>
    )
}