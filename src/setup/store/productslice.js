import {createSlice} from '@reduxjs/toolkit';
import { recipieList } from '../element/recipielist';


const product_Slice = createSlice({
    name:'product',
    initialState: {availableProduct: recipieList,isNotFound:false},
    reducers:{
       viewFiltered(state,action){
           const filterdedProduct = action.payload;
           state.availableProduct = filterdedProduct.content;
        },
        updateProduct(state,action){
            const productTobeAdded = action.payload;
            state.availableProduct.push({
                id:productTobeAdded.id,
                crImg:productTobeAdded.crImg,
                crEmail:productTobeAdded.crEmail,
                crName:productTobeAdded.crName,
                recipeImg:productTobeAdded.recipeImg,
                recipeName:productTobeAdded.recipeName,
                recipeInfo:productTobeAdded.recipeInfo,
                recipeQuantity:productTobeAdded.recipeQuantity,
                recipePrice:productTobeAdded.recipePrice
            })
        },
           isFound(state,action){
            if(state.availableProduct.length !==0){
            state.isNotFound = false;
            }else{
            state.isNotFound = false;
            }
         }
       
    }
})
            
export const productActions = product_Slice.actions;
export default product_Slice;