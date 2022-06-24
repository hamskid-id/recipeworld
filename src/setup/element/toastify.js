import React from "react"
import { useSelector } from "react-redux"

export const ToastifyContainer = ()=>{

    const toastMessage = useSelector((state)=>state.notification.message);
    

    return(
        <>
            <div className='bg bg-white w-fit-content rounded toastDiv'>
               
                <div>
                    { toastMessage ==='sending request...'?<span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>:null}
                    <span className='sr-only text-center'> {toastMessage}</span>
                </div>
               
            </div>
        </>
    )
}