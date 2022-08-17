import React,{useContext} from 'react'
import {CartState} from '../context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import './styles.css'
function Home() {
  const{state:{products},productState}=CartState()
  console.log('home context',CartState())

  let sortedProducts=[...products];

  if(productState.sort){
      sortedProducts= productState.sort=== "ASCENDING"? sortedProducts.sort((a,b) => a.price -b.price ) :sortedProducts.sort((a,b) =>  b.price -a.price )
  }
  if(productState.byStock)
  sortedProducts=sortedProducts.filter(product=>product.inStock>=0)
  if(productState.byFastDelivery)
  sortedProducts=sortedProducts.filter(product=>product.fastDelivery)
  if(productState.byRating >0){
console.log('productState.byRating ',productState.byRating )
    sortedProducts=sortedProducts.filter(product=>product.ratings === productState.byRating)
  }
  
  return (
   <div className='home'>
    
      <Filters />
    
    <div className='productContainer'>
      {sortedProducts.map((product)=>{
        return <SingleProduct product={product}  key={product.key}/>
      })}
    </div>
   
      </div>
  )
}

export default Home