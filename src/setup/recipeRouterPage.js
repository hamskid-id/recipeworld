import React from 'react';
import {NavBar} from './element/navbar';
import {recipieList} from './element/recipielist';
import {useParams,Link} from 'react-router-dom';
import{ RecipeDetails} from './element/recipedetails';
import { useSelector,useDispatch} from 'react-redux';
import {AddRecipe} from './addRecipe';
import { cartActions } from './store/cartSlice';
import { Explorepage } from './explorepage';
import { notificationActions } from './store/notificationSlice';
import {FollowSection} from './element/followsection';
import { ToastifyContainer } from './element/toastify';

export const RecipePage =()=>{

    const {id} = useParams();
    const dispatch = useDispatch()
    const indrecipe = recipieList.find((recipe) => recipe.id === parseInt(id)); 
    const cartItems = useSelector((state)=>state.cart.cartContent);
    const viewCart = useSelector((state)=>state.cart.displayCart);
    const toastMessage = useSelector((state)=>state.notification.message);

    
 
    const handleCartAdd = ()=>{
        dispatch(notificationActions.notFirstRender())
        dispatch(cartActions.addToCart({
            id:indrecipe.id,
            crImg:indrecipe.crImg,
            crEmail:indrecipe.crEmail,
            crName:indrecipe.crName,
            recipeImg:indrecipe.recipeImg,
            recipeName:indrecipe.recipeName,
            recipeInfo:indrecipe.recipeInfo,
            recipeQuantity: indrecipe.recipeQuantity,
            recipePrice: indrecipe.recipePrice,

        }))
    }
    
    return(
        <>
          <NavBar tittle='Product'/>
          {toastMessage ?<ToastifyContainer/>:null}
          <div className="container-fluid px-4 ">
            <div className="row ">
                <div className='col-md-3 pt-3'>
                    <div className=" nav nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className="d-flex flex-row align-items-center ">
                                <div className='col-md-6 profileImg'>
                                    <img className='w-100 rounded' src="/img/blog-img/18.jpg"alt='object not found'/>
                                </div>
                                <div className='col-md-6 profileDiv p-2 text-white'>
                                    <p className='mt-3 mb-0  fs-5 text-white'>User Name</p>
                                    <p className=' fs-5 text-white'>user@gmail.com</p>
                                </div>
                        </div>
                        <button className="nav-link  active mt-3  btnWidth" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Profile</button>
                        <button className="nav-link   btnWidth" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Recipie</button>
                        <button className="nav-link  btnWidth" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Explore</button>
                    </div>
                </div>
                <div className="col-md-9 tab-content p-4 bg bg-white tabContentAdj" id="v-pills-tabContent">
                        
                        <div className="tab-pane fade show active shadow " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="row">
                                <div className="col-md-5">
                                    <RecipeDetails crImg={indrecipe.crImg}
                                                    crEmail={indrecipe.crEmail}
                                                    crName={indrecipe.crName}
                                                    recipeImg={indrecipe.recipeImg}
                                                    recipeName={indrecipe.recipeName}
                                                    recipeInfo={indrecipe.recipeInfo}
                                                    id={indrecipe.id}
                                                
                                    />
                                    <div className='p-4 pt-0  row'>
                                        <div className="col-md-6">
                                            <Link to={'/hamskid-id/thirdRecipe'} className='btn btn-md btn-danger mb-2'>
                                                Back to home
                                            </Link>
                                        </div>
                                        <div className="col-md-6">
                                            <button className='btn btn-md btn-success request'onClick={handleCartAdd}>Add To Cart</button>
                                        </div>
                                    </div>

                                </div>
                                <div className=' col-md-5 cart mb-4'>
                                   
                                     { viewCart &&
                                        <div className=' maroon p-2'>
                                                <p className='fs-4 pt-3 text-white text-center'>Cart Collections</p>
                                                {cartItems.length ===0?<p className='fs-5 text-white text-center'>You currently have no item in the cart</p>:null}
                                                {
                                                    cartItems.map((item)=>{
                                                        const {id,crImg,crEmail, crName,recipeImg,recipeName,recipeInfo,recipeQuantity,recipePrice} = item;
                                                        return(
                                                            <div className='mb-3 bg bg-white '>
                                                                <RecipeDetails key={item.id} {...item}/>
                                                                
                                                                   <button className='btn btn-sm btn-danger m-2 request' onClick={()=>{
                                                                        dispatch(notificationActions.notFirstRender())
                                                                        dispatch(cartActions.removeFromCart({
                                                                            id,crImg,crEmail, crName,recipeImg,recipeName,recipeInfo,recipeQuantity,recipePrice
                                                                        }))
                                                                        }}>
                                                                       Remove from cart
                                                                    </button>  
                                                            </div>
                                                        )
                                                    })
                                                }  
                                        </div>
                                    }
                                </div>

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