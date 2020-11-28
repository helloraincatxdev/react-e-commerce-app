import React from 'react';
import * as S from '../styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ users, inCart }) => {

    return (
        <S.Navbar>
            <S.NavbarInner>
                <S.NavbarNotify>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        {/* <p>account { users[0].name }</p> */}
                    </div>
                </S.NavbarNotify>
                <S.NavbarSearch>
                    <p>Search stuffs go here</p>
                    <input type="text" placeholder="Search smht here"/>
                    <p>In Cart: { inCart.length }</p>
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