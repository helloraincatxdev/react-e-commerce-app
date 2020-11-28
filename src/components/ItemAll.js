import React from 'react';
import { connect } from 'react-redux';
import * as S from '../styles';
import { Link } from 'react-router-dom';

const ItemAll = ({ items }) => {

    console.log(items)

    return (
        <>
        <S.ItemAll>
            { items.map(item => (
                <S.MainCardItem key={ item.id }>
                    <Link to={ `/product/${item.title}id=${item.id}` }>
                        <img src={ item.imgUrl } alt='hi'/>
                        <article>
                            <p>{ item.title }</p>
                            <p>Rating: ⭐⭐⭐⭐⭐</p>
                            <small>Price: ฿<b>{ item.price }</b></small>
                        </article>
                    </Link>
                </S.MainCardItem>
            )) }
        </S.ItemAll>
        </>
    )
}

const mapStateToProps = (state) => {
    return { items: state.items }
}

export default connect(
    mapStateToProps
)(ItemAll);