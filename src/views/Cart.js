import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector(state => state.inCart)
    console.log(cartItems)

    const res = cartItems.length !== 0 ? ( cartItems.map(item => (
        <div key={ item.id }>
            <h2>{ item.title }</h2>
            <p>{ item.price }</p>
            <img src={ item.imgUrl } alt={ item.title }/>
        </div>
    ))) :
    <p>
        No Item in Cart
    </p>

    return (
        <>
            { res }
        </>
    )
}
export default Cart;


