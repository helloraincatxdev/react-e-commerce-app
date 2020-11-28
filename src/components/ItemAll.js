import React from 'react';
import { connect } from 'react-redux';
import * as S from '../styles';
import { Link } from 'react-router-dom';

const ItemAll = ({ items }) => {

    //slice overflow text
    const handleOverflowText = (text) => {
        if(text.length > 40) {
            let res = '';
            for(let i = 0; i < 40; i++) {
                res += text[i];
            }
            res += '...';
            return res;
        }
        return text;
    }

    return (
        <>
        <S.ItemAll>
            { items.map(item => (
                <S.MainCardItem key={ item.id }>
                    <Link to={ `/product/${item.title}id=${item.id}` }>
                        <img src={ item.imgUrl } alt={ item.title }/>
                        <article>
                            <div>
                                <p>{ handleOverflowText(item.title) }</p>
                            </div>
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