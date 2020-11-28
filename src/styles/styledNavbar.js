import style from 'styled-components'

export const Navbar = style.div`
    // background: pink;
`
export const NavbarInner = style.div`
    max-width: 1200px;
    margin: auto;
`
export const NavbarSearch = style.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;  
    padding: 1rem 0;

    a {
        text-decoration: none;
        display: flex;
        align-items: baseline;
    }
    a:nth-child(1) p {
        margin-left: 5px;
        font-weight: bold;
        color: ${ props => props.theme.headerTextCol1 };
    }
    a:last-child {
        align-items: center;
        svg {
            fill: ${ props => props.theme.headerTextCol1 };
        }
        p {
            font-weight: bold;
            margin-right: 3px;
            color: ${ props => props.theme.headerTextCol1 };
        }
    }
`