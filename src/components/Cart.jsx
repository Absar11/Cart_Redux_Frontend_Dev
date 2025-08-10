import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from '../features/cart/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{ display: 'flex', gap: '30px', padding: '20px' }}>
            {/* Summary */}
            <div style={{ width: '25%' }}>
                <h2>Cart Summary</h2>
                <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                <p>Total Price: ${total.toFixed(2)}</p>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '75%' }}>
                {cart.map(item => (
                    <div key={item.id} style={{ border: '1px solid #ddd', padding: '16px', width: '220px' }}>
                        <h4>{item.title}</h4>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Total: ${item.price * item.quantity}</p>

                        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
