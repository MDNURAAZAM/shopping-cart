import React from 'react';
import './CartProduct.css';

const CartProduct = ({ cartProduct }) => {
    console.log(cartProduct);
    const { img ,quantity} = cartProduct;
    return (
        <div className='cart-product'>
            <img src={img} alt="" />
            <h3> x</h3>
            <h3 className='quantity'>{ quantity}</h3>
        </div>
    );
};

export default CartProduct;