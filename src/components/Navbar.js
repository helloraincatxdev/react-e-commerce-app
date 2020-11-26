import React from 'react';
import * as S from '../styles';
import { connect } from 'react-redux';

const Navbar = ({ users }) => {

    return (
        <S.Navbar>
            <S.NavbarInner>
                <S.NavbarNotify>
                    <div>
                        <p>ขาย |</p>
                        <p>ขายสินค้ากับช้อปปี้ |</p>
                        <p>ดาวน์โหลด |</p>
                        <p>ติดตามเรา |</p>
                    </div>
                    <div>
                        <p>account { users[0].name }</p>
                    </div>
                </S.NavbarNotify>
                <S.NavbarSearch>
                    <p>Search stuffs go here</p>
                    <input type="text" placeholder="Search smht here"/>
                    <p>Cart</p>
                </S.NavbarSearch>
            </S.NavbarInner>
        </S.Navbar>
    )
}

// connect to Redux and map state there into this component prop.
const mapStateToProps = ( state ) => ({
    users: state.users
})

export default connect(
    mapStateToProps
)(Navbar);