import React,{useEffect} from 'react';
import {NavBar} from './element/navbar';
import {DashBody} from './element/dashbody';
import {RegisterPage}from './registerpage';
import { useSelector,useDispatch } from 'react-redux';




export const DashBoard =()=>{
    const isLoggedIn =  useSelector(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()


   
    return(
        <>
            {
               isLoggedIn && 
                    <div>
                        <NavBar tittle={<p className=' textHead'><span className=' text-danger'>Recipi</span><span>Express</span></p>}/>
                        <DashBody/> 
                    </div>
            
            }
            {!isLoggedIn && <RegisterPage/>}  
        </>
    )
}