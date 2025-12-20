import React from 'react'
import { products } from '../data/Data'
import { useParams } from 'react-router-dom'
import Product from '../components/Product';
function ProductDetail() {
const{id}=useParams();

  return (
    <div>{
        products && products.map((e)=>{
            if(e.id==id){
                return <Product product={e}/>
            }
        })
        }</div>
  )
}

export default ProductDetail