import React from 'react'
import { latestPost } from './latestpost'



export const LatestBody =()=>{
    return(
        <>
            <div className='row'>
                    {
                        latestPost.map((postdetail,index)=>{
                            const { post,author,img} = postdetail;
                            return(
                                <div>
                                    <a  className='row' href="#" style={{textDecoration:'none'}}>
                                        <div className='col-md-6 mb-4'>
                                            <img className='w-100' src={img} alt="object not found"/>
                                        </div>
                                        <div className='col-md-6'>
                                            <div key={index} className='p-2'>
                                                    <p className='fs-5 fw-bold text-dark post'>{post}</p>
                                                    <p className='text-dark date'>By {author}</p>
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