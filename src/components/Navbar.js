import React from 'react';
import * as S from '../styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ users, inCart }) => {

    return (
        <S.Navbar>
            <S.NavbarInner>
                <S.NavbarSearch>
                    <Link to="/">
                        <img src={ require('../assets/logo1.png').default } alt="logo"/>
                        <p>SHOPify</p>
                    </Link>
                    <S.InputWrap>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                        </svg>
                        <input type="text" placeholder="Search smht here"/>
                    </S.InputWrap>
                    <Link to="/cart">
                        { inCart.length }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                        </svg>
                    </Link>
                </S.NavbarSearch>
            </S.NavbarInner>
        </S.Navbar>
    )
}

// connect to Redux and map state there into this component prop.
const mapStateToProps = ( state ) => ({
    users: state.users,
    inCart: state.inCart,
})

export default connect(
    mapStateToProps
)(Navbar);