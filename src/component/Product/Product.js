import React from 'react';
import './Product.css';

const Product = ({ product,addToCart }) => {
    const { img,name,price,seller,ratings } = product;
    return (
        <div className='container'>
            <img src={img} alt="" />
            <div className="product-details">
                <h4>Name: {name}</h4>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: { ratings} star</p>
            </div>
            <button onClick={()=> addToCart(product) } className='btn-cart'>Add to cart</button>

        </div>
    );
};

export default Product;