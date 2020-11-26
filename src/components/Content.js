import React from 'react';
import * as S from '../styles';
import ItemAll from './ItemAll';
import ItemPopular from './ItemPopular';

const Content = () => {
    return (
        <div>
            <S.Content>
                <div>
                    <h3>Filter</h3>
                </div>
                <div>
                    <ItemAll/>
                    <ItemPopular/>
                </div>
            </S.Content>
        </div>
    )
}
export default Content;