import {createSlice} from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name:'notification',
    initialState: {message:null,isFirstRender :true},
    reducers:{
        
        showNot(state, action){
              const  message = action.payload.message
              state.message =  message;
        },
        notFirstRender(state,action){
            state.isFirstRender =  false;
        }
    }

})
export const notificationActions = notificationSlice.actions;
export default notificationSlice;