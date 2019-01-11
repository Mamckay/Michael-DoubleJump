import React from 'react';
import './productitem.css';

export default function ProductItem({product, onClick}) {
     
            return <div className='containerProducts'>
            <div className='innerGrid'>
            <img className ='imgProducts'src={product.imgUrl} alt='product'></img>
            <div>
                <span className ='titleProducts'>{product.name}</span>
                <div>
                    <span className='priceProducts'>{product.genre}</span>
                </div>
                <div>
                    <span className='priceProducts'>{product.description}</span>
                </div>
                <br></br>
                <div>
                    <span className ='priceProducts'>Buy New: {product.price} </span>
                    <button onClick={() => onClick()} className='buyButton'>add to cart</button>
                </div>
            </div>
        </div>
        </div>
        
}