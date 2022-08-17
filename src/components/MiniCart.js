import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { CartState } from '../context/Context'
const Cart=()=> {
  const {state:{cart},dispatch}=CartState();
  return (

    <div className="cartMainContainer">
      {cart.map((item)=>{
        return  <span className='cartitem' key={item.id}>
          <img 
          src={item.image}
          className="cartItemImg"
          alt={item.name}
          />
          <div className='cartItemDetail'>
            <span>{item.name}</span>
            <span>{item.price.split(".")[0]}</span>

          </div>
          <AiFillDelete 
          fontSize="20px"
          style={{cursor:"pointer"}}
          onClick={()=>
          dispatch({
            type:"REMOVE_FROM_CART",
            payload:item.id
          })
          }
          />
        </span>
       
      })}
      </div>
  )
}

export default Cart;