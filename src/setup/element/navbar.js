import React,{useEffect} from 'react';
import { cartActions,sendCartData } from '../store/cartSlice';
import { useSelector,useDispatch} from 'react-redux';
import { authActions } from '../store/authSlice';


export const NavBar =({tittle})=>{

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.cart.cartContent);
    const initialRend = useSelector((state)=>state.notification.isFirstRender);
    const displayCart = ()=> dispatch(cartActions.setDisplayCart())
    const handleLogOut = ()=>{
       dispatch(authActions.setLogOut());
    }
     useEffect(()=>{
       !initialRend && dispatch(sendCartData(cartItems))
    },[cartItems, dispatch])

    return(
        <>
        <div className='d-flex flex-row justify-content-between bg bg-white shadow  px-4 pt-4 navBg'>
            <div className='navBg w-25 bg bg-white'>
               <p className='display-6 fw-bold text-dark'>{tittle}</p>
            </div>
             <div className='navBg  bg bg-white fs-5 text-dark'  onClick={displayCart}>
                {cartItems.length !==0?<p className='bg bg-danger text-white fw-bold rounded' style={{position:'absolute',height:'20px'}}>{ cartItems.length}</p>:null}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" fill="dark" className="bi bi-cart bg bg-white" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>Cart
               
            </div>
            <div className='navBg'>
                <button className='btn btn-sm btn-dark buttonres' onClick={handleLogOut}>Log Out</button>
            </div>
            
        </div>
        </>
    )
}