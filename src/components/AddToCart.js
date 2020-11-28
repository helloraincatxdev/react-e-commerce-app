import React from 'react';
import { useDispatch } from 'react-redux';

const AddToCart = ({ item }) => {

    console.log(item)
    
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch({ type: 'ADD_ITEM_TOCART', payload: item }) }>Add to Cart</button>
        </div>
    )

}
export default AddToCart;
