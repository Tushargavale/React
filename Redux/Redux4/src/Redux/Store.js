// import {createStore} from 'redux'
import { reducer } from './counteSlice'

// export const store=createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__?.())


import { ProductList } from '../Products'


/**Make our Own Redux STore */

let state={
    products:ProductList,
    cartItem:[{ProductID:2,quantity:3},{ProductID:4,quantity:3},],
    wishList:[3,2,5]
}

const listener=[]



export function MyCreateStore(reducer){
 const store={
    dispatch:(action)=>{
       state= reducer(state,action)
       listener.forEach((fun)=>fun())
    },
    getState:()=>{
       return state
    },
    subScribe:(fun)=>{
        listener.push(fun)
    }




 }
//  store.dispatch({type:'IN@1'})

 return store
}