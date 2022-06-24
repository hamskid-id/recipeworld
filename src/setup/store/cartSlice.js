import {createSlice} from '@reduxjs/toolkit';
import { notificationActions } from './notificationSlice';

const cart_Slice = createSlice({
    name:'cart',
    initialState: {
        cartContent: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[],
        totalQuantity:0,
        displayCart:false,
        displayRemove:false
    },
    reducers:{
       addToCart(state,action){
            const newitem = action.payload
            const existingItem = state.cartContent.find((item) => item.id === newitem.id)
            if(existingItem){
                existingItem.recipeQuantity++;
                state.displayRemove = true;
                existingItem.recipePrice += newitem.recipePrice
            }else{
                state.cartContent.push({
                    id:newitem.id,
                    crImg:newitem.crImg,
                    crEmail:newitem.crEmail,
                    crName:newitem.crName,
                    recipeImg:newitem.recipeImg,
                    recipeName:newitem.recipeName,
                    recipeInfo:newitem.recipeInfo,
                    recipeQuantity:newitem.recipeQuantity,
                    recipePrice:newitem.recipePrice
                })
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartContent));

        },
        removeFromCart(state,action){
            const itemToRemoveProp = action.payload;
            const itemToRemove = state.cartContent.find((item)=>item.id === itemToRemoveProp.id)
            if(itemToRemove.recipeQuantity !== 1){
                itemToRemove.recipeQuantity--;
                itemToRemove.recipePrice -= itemToRemoveProp.recipePrice;
            }else{
                state.cartContent = state.cartContent.filter((item)=>item.id !== itemToRemove.id)
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartContent));
        },
        setDisplayCart(state,action){
            state.displayCart = !state.displayCart
        },
        updateCart(state,action){
            const cartInfo = action.payload;
            state.cartContent = cartInfo.updatedCart;
        }
       
    }
})

export const sendCartData = (cartItems) =>{
    
    return async(dispatch) =>{
        
        dispatch(notificationActions.showNot({
            message:'sending request...'
        }))
        const sendRequest = async () => {
            const res = await fetch('https://availableproduct-b0af4-default-rtdb.firebaseio.com/cartItems.json',
                {
                    method:"PUT",
                    body:JSON.stringify(cartItems)
                }
            )
                await res.json();
            dispatch(notificationActions.showNot({
                message:'request successful'
            }))
            setTimeout(()=>{
                dispatch(notificationActions.showNot({
                    message:null
                }))
            },3000)
        }
        try{
            await sendRequest()
        }catch(error){

            dispatch(notificationActions.showNot({
                message:'request failed'
            }))
            setTimeout(()=>{
                dispatch(notificationActions.showNot({
                    message:null
                }))
            },4000)
           

        }
    }

}
export const cartActions = cart_Slice.actions;
export default cart_Slice;