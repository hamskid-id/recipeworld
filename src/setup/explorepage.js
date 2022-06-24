import React from 'react';
import { TopRatedRecipe } from './element/toprated';
import { topRated } from './element/topratedrecipe';
import {PostSection} from './element/postsection';
import { FollowSection } from './element/followsection';
import {RecipeSlide}from './element/recipeslide'

export const Explorepage= () =>{
    return(
        <>
            <div className='shadow mt-3'>
                <p className='fs-4 text-center pt-4'>Top Rated Recipes</p>
                <div className='row topRatedSection'>
                    {
                        topRated.map((top, index)=>{ 
                            return <TopRatedRecipe key={index} {...top}/>
                        })
                    }
                </div>
                <div className='slidesection  m-auto mb-4 mt-2'>
                    <RecipeSlide/>
                </div>
                <div className='postSection '>
                    <PostSection/>
                </div>
                <div className='followSection'>
                    <FollowSection/>
                </div>
            </div>
            
        </>
    )
}