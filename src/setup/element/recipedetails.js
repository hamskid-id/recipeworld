import React from 'react';



export const RecipeDetails =({recipeImg, recipeInfo, recipeName, crName, crEmail, crImg,id, recipeQuantity, recipePrice})=>{
    return(
        <>
        <div className='rounded'>
                    <div>
                        <img className='w-100 rounded-circle p-2 shadow' src={recipeImg} alt='object not found'/>
                    </div>
                   
                    <div className="row align-items-center p-2 ">
                        <div className='col-md-3 crImg'>
                            <img className='w-100 rounded ' src={crImg} alt='object not found'/>
                        </div>
                        <div className='col-md-6 '>
                            <div className=''>
                                <p className='mt-3 mb-0'>{crName}</p>
                                <p>{crEmail}</p>
                            </div>
                        </div>

                    </div>
                    <div className='p-2'>
                        <p className='fs-4 fw-bold text-success' >{recipeName}</p>
                        <p>{recipeInfo}</p>
                    </div>     
                </div>
            
        </>
    )
}