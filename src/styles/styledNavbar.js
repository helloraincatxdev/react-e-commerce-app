import style from 'styled-components'

export const Navbar = style.div`
    background: pink;
`
export const NavbarInner = style.div`
    max-width: 1200px;
    margin: auto;
`
export const NavbarNotify = style.div`
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
    }
`
export const NavbarSearch = style.div`
    display: flex;
    justify-content: space-between;
`