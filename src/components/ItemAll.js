import React from 'react';
import { connect } from 'react-redux';
import * as S from '../styles';

const ItemAll = ({ items }) => {

    console.log(items)

    return (
        <S.ItemAll>
            { items.map(item => (
                <S.MainCardItem key={ item.id }>
                    <img src={ item.imgUrl } alt="laptop A"/>
                    {/* <article> */}
                        <p>{ item.title }</p>
                        <small>Price: ${ item.price }</small>
                    {/* </article> */}
                </S.MainCardItem>
            )) }
        </S.ItemAll>
    )
}

const mapStateToProps = (state) => {
    return { items: state.items }
}

export default connect(
    mapStateToProps
)(ItemAll);