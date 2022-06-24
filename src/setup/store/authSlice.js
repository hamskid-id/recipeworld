import {createSlice} from '@reduxjs/toolkit'

const auth_Slice = createSlice({
    name:'auth',
    initialState: { isLoggedIn: true},
    reducers:{
        setLogIn(state,action){
            state.isLoggedIn = true;
        },
        setLogOut(state,action){
            state.isLoggedIn = false;
        }
       
    }
})

export const authActions = auth_Slice.actions;
export default auth_Slice;