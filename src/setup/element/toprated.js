import React from'react'

export const TopRatedRecipe =({image,date,name})=>{
    return(
        <>
        <div className='col-md-3 mb-3' style={{position:'relative'}}>
            <a href="#">
                <div className='tratedMainDiv'>
                    <img className='w-100 topImg' src={image} alt='object not found'/>
                    <div className='info-div m-2 text-white fw-bold fs-5 topratedtext'>
                        <p className='info-div text-light'>{date}</p>
                        <p className='info-div text-light'>{name}</p>
                    </div>
                </div>
            </a>
            
        </div>
        </>
    )
}