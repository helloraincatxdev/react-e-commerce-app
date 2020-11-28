import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import AddToCart from '../components/AddToCart';

// createSelector doesn't accept params, use factory fn() 
const facFn = (payLoadId) => {
    return createSelector(
        (state) => state.items,
        (items) => items.filter((item) => item.id === payLoadId)
    )
}

const Product = () => {
    let { slug } = useParams();

    // grab item's id located at last 4 chars of slug.
    let id = slug.slice(-4);
    console.log(id)

    const item = useSelector(facFn(id));

    let res = item ? (item.map(product => (
        <div key={ product.id }>
            <h3>Welcome to <b>{ product.title }</b> page</h3>
            <img src={ product.imgUrl } alt={ product.title } />
            <AddToCart item={ product } />
        </div>
    ))) :
    <p>No data</p>

    return (
        <>
            { res }
        </>
    )
}

export default Product;
