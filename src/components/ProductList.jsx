import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import { addToCart } from '../features/cart/cartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {items.map(product => (
                <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', width: '250px' }}>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
