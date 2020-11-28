import style from 'styled-components';

export const MainCardItem = style.div`
    max-width: 200px;
    width: 200px;
    height: 280px;
    overflow: hidden;
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        cursor: pointer;

    }

    a {
        text-decoration: none;
        color: ${ props => props.theme.headerTextCol1 };

        article {
            padding: 0 .5rem;
            div {
                min-height: 36px;
                max-height: 36px;
            }
        }
    }
    
    img {
        max-width: 200px;
        width: 200px;
        height: 200px;
    }
`