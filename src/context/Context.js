import { createContext,useContext,useReducer } from "react";
import {faker} from '@faker-js/faker'
import { cartReducer, productReducer } from "./Reducers";
const Cart =createContext();


const Context=({children})=>{
const products=[...Array(20)].map(()=>({
id:faker.datatype.uuid(),
price:faker.commerce.price(),
fastDelivery:faker.datatype.boolean() ,
image:faker.image.business(640,480, true),
// image:faker.image.fashion(),
inStock:faker.datatype.number({ min:0, max:8,precision:1 })  ,
name:faker.commerce.productName(),
ratings:faker.datatype.number({ min:1, max:5,precision:1 }) 


}))
console.log(products)

const initialState={
    products:products,
    cart:[]
}

const [state, dispatch] = useReducer(cartReducer, initialState);
const [productState,productDispatch]=useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchquery:""

})
    return (
   <Cart.Provider value={{state, dispatch,productState,productDispatch}}>
    {children}
   </Cart.Provider>
    )
}
export default Context;

export const CartState=()=>{
    return useContext(Cart);
}


