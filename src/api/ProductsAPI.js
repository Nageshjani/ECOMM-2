//Fetches product by using api 
//return products

import React from 'react'
import {useState, useEffect} from 'react'

import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`http://localhost:5500/api/products`)
            setProducts(res.data.products)
            
        }
        getProducts()
        
        

    },[])
    console.log([products, setProducts])
    //console.log(typeof(products))

  return {
    products: [products, setProducts],
    
  }

}

export default ProductsAPI
