import React from 'react'
import { previousPost } from './previouspost'



export const PreviousBody =()=>{
    return(
        <>
            <div className='row'>
              
                    {
                        previousPost.map((postdetail,index)=>{
                            const {date, post,author,img, subPost} = postdetail;
                            return(
                                <div >
                                    <a className='row' href="#" style={{textDecoration:'none'}}>
                                        <div className='col-md-6 mb-4'>
                                            <img className='w-100' src={img} alt="object not found"/>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='p-2' key={index} >
                                                <p className='text-danger'>{date}</p>
                                                <p className='fs-5 text-dark post fw-bold'>{post}</p>
                                                <p className='text-dark date'>By {author}</p>
                                                <p className='fs-6  text-dark post'>{subPost}</p>
                                            </div>
                                        </div>
                                    </a>
                                    
                                </div>
                            )
                        })
                    }
            </div>
        </>
    )
}