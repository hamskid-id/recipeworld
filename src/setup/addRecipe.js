import React from 'react';
import { useDispatch } from 'react-redux';
import {productActions} from './store/productslice';



export const AddRecipe=()=>{

    const dispatch = useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(productActions.updateProduct({
            id:new Date().getTime().toString(),
            crImg:e.target.CreatorsImage.files[0],
            crEmail:e.target.CreatorsEmail.value,
            crName:e.target.creatorname.value,
            recipeQuantity:e.target.quantity.value,
            recipePrice:e.target.price.value,
            recipeName:e.target.recipename.value,
            recipeInfo :e.target.description.value,
            recipeImg:e.target.recipeImage.files[0]
       }))
        console.log(e.target.CreatorsImage.files[0]);
    }
    return(
        <>
           <div className="p-3"  style={{height:'100%'}}>
               <p className='fs-3 text-center'>Add Recipe</p>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-6'>
                           <div className='d-flex flex-column'>
                               <input type='text' className=' w-100  p-2 mb-2 addInput' name='recipename' placeholder='Name of the recipe' required/>
                               <input type='text' className=' w-100  p-2 mb-2 addInput' name='description' style={{height:'10rem'}} placeholder='Description'  required/>
                               <input type='text' className=' w-100 p-2 mb-2 addInput' name='quantity' placeholder='Recipe Quantity'  required/>
                               <input type='number' className=' w-100 p-2 mb-2 addInput' name='price'placeholder='Recipe Price'  required/>
                               <input type='text' className=' w-100 p-2 mb-2 addInput' name='creatorname'placeholder='Creators name'  required/>
                               <input type='text' className=' w-100 p-2 mb-2 addInput' name='CreatorsEmail'placeholder='Creators Email' required/>
                           </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='recipeImage' >Add Recipe Image</label>
                                    <input type='file' name='recipeImage' accept='.jpg, .jpeg, .png'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='CreatorsImage' >Creators Image</label>
                                    <input type='file' name='CreatorsImage' accept='.jpg, .jpeg, .png'/>
                                </div>
                                <button type='click' className='btn btn-md btn-success mt-3'>Publish Recipe</button>
                            </div>
                            
                        </div>

                    </div>
                </form>

           </div>
                
           

        </>
    )
}