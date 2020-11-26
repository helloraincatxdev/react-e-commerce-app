import React from 'react';
import { connect } from 'react-redux';
import * as S from '../styles';

// const movieImages = require.context("../assets/", true, /\.jpg$/);

const ItemAll = ({ items }) => {

    console.log(items)

    return (
        <S.ItemAll>
            <div>
            { items.map(item => (
                <S.MainCardItem key={ item.id }>
                    {/* <S.ImgWrap> */}
                        <img src={ item.imgUrl } alt="laptop A"/>
                    {/* </S.ImgWrap> */}
                    <p>{ item.title }</p>
                </S.MainCardItem>
            )) }
            </div>
        </S.ItemAll>
    )
}

const mapStateToProps = (state) => {
    return { items: state.items }
}

export default connect(
    mapStateToProps
)(ItemAll);