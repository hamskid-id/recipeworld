import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {recipieList} from './recipielist'
import{ RecipeDetails} from './recipedetails';
import { AddRecipe } from '../addRecipe';
import { Explorepage } from '../explorepage';
import {Link} from 'react-router-dom';
import { productActions } from '../store/productslice';
import {FollowSection} from './followsection';

export const DashBody = () =>{

    const dispatch = useDispatch();
    const searchRecipe = useSelector((state)=>state.product.availableProduct);
    const IsNotFound = useSelector((state)=>state.product.isNotFound);

    const handleChange =(e)=>{
       const filteredRecipe = recipieList.filter(myrecipe => myrecipe.recipeName.toLowerCase().includes(e.target.value)?myrecipe:null)
       dispatch(productActions.viewFiltered({
           content:filteredRecipe
       }))
       dispatch(productActions.isFound());
       

    }
    return(
        <>
        <div className="container-fluid px-4">
            <div className="row ">
                <div className='col-md-3'>
                    <div className=" nav nav-pills pt-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    
                            <div className="d-flex flex-row align-items-center ">
                                    <div className=' col-md-6 col-sm-4 profileImg'>
                                        <img className='w-100 rounded' src="https://res.cloudinary.com/hamskid/image/upload/v1655990851/Recipe/18_vugb9t.jpg"alt='object not found'/>
                                    </div>
                                    <div className='p-2 col-md-6 col-sm-8 profileDiv'>
                                        <p className='mt-3 mb-0 fs-5 text-white'>Welcome user</p>
                                        <p className='usertext text-white'>user@gmail.com</p>
                                    </div>
                            </div>
                            <button className="nav-link  active mt-3 w-md-75  w-sm-50  btnWidth" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                            <button className="nav-link w-md-75  w-sm-50  btnWidth" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Recipie</button>
                            <button className="nav-link w-md-75  w-sm-50  btnWidth" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Explore</button>
                    </div>

                </div>
                
                <div className="col-md-9 tab-content bg bg-white shadow tabContentAdj" id="v-pills-tabContent">
                        <div className="tab-pane fade show active  shadow " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className='d-flex flex-column p-3'>
                                <p className='fs-2 fw-bold'>Recipes</p>
                                <input className="p-1 w-md-50 ashInput" type='text' placeholder='search for a recipie' onChange={handleChange}/>  
                            </div>
                            <div className='row productDivadj'>
                               {
                                   !IsNotFound && searchRecipe.map((recipe, index)=>{   
                                        return(
                                            
                                            <div className='col-md-4  p-3 prodBright'>
                                                <div className='shadow '>
                                                    <RecipeDetails key={recipe.id} {...recipe}/>
                                                    <Link to={`/recipePage/${recipe.id}`} className='btn btn-md btn-success mb-3 mx-2'>
                                                        View more
                                                    </Link>
                                                </div>
                                               
                                            </div>
                                            
                                        )
                                    })
                                }{IsNotFound && <p>Sorry Search not Found</p>}

                            </div>
                            <FollowSection/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <AddRecipe/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <Explorepage/>
                        </div>

                   
                    
                </div>
            </div>
           
        </div>
        </>
    )
}