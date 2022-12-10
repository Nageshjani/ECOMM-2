import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product}) {

    return (
        <div className="product_card">
            {
               <input type="checkbox" checked={product.checked} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            
            
        </div>
    )
}

export default ProductItem
