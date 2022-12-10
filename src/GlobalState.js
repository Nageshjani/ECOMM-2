import React from 'react'
import { createContext } from 'react'
import ProductsAPI from './api/ProductsAPI.js'
export const GlobalState=createContext()

export const DataProvider=({children})=>{
   
const state={
    product:ProductsAPI()
}
//console.log({state.product})
//console.log(typeof(state.product))    
return(
    
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
)


}