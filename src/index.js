import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { DashBoard } from './setup/dashboard';
import { RecipePage } from './setup/recipeRouterPage';
import { AuthPage } from './setup/authpage';
import {RegisterPage} from './setup/registerpage';
import {LoginPage} from './setup/loginpage';
import {  Provider} from 'react-redux';
import store from './setup/store/index';
import './App.css';



const RoutesContainer = ()=>{
  return(
    <>
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path='/hamskid-id/thirdRecipe' element={<DashBoard/>} />
          <Route exact path='/recipePage/:id' element={<RecipePage/>} />
          <Route exact path='/authPage' element={<AuthPage/>} />
          <Route exact path='/registerpage' element={<RegisterPage/>} />
          <Route exact path='/loginpage' element={<LoginPage/>} />
          </Routes>
      </Router>
    </Provider>
      
    </>

  )
    /*
    <Provider store ={store}>
      <Auth/>
    </Provider>
    </>
    */
} 
ReactDom.render(<RoutesContainer/>,document.getElementById('root'));



