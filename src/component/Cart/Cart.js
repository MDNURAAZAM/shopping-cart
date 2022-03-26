import React from 'react';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css';

const Cart = ({ cart }) => {
    let totalItems = 0;
    let shipping = 0;
    let price = 0;
    for (const product of cart) { 
        totalItems += product.quantity;
        shipping += product.shipping;
        price += (product.price * product.quantity);
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = shipping + price + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Total Number of items: {totalItems}</p>
            <p>Total Price: {price}</p>
            <p>Shipping charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
            {
                cart.map(cartProduct => <CartProduct
                    cartProduct={cartProduct}
                    key={ cartProduct.id}
                ></CartProduct>)
            }
        </div>
    );
};

export default Cart;