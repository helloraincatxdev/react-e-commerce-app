import React from 'react';
import { useDispatch } from 'react-redux';

const AddToCart = ({ item }) => {
    
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch({ type: 'ADD_ITEM', item }) }>Add to Cart</button>
        </div>
    )

}
export default AddToCart;
