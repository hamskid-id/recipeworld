import React from 'react';
import { PreviousBody } from './previousBody';
import { LatestBody } from './latestBody';

export const PostSection = () =>{
    return(
        <>
            <div className='row mt-2'>
                <div className='col-md-7'>
                    <p className='fs-4 text-center mb-4' style={{borderBottom: 'blue'}}>Previous Update</p>
                        {<PreviousBody/>}
                </div>
                <div className='col-md-5'>
                <p className='fs-3 text-center mb-4'>Recent Posts</p>
                    {<LatestBody/>}
                </div>
            </div>
        </>
    )
}