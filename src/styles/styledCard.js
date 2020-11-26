import style from 'styled-components';

export const MainCardItem = style.div`
    max-width: 200px;
    width: 200px;
    height: 280px;
    overflow: hidden;
    padding: 0 .3rem;

    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        cursor: pointer;

    }
    
    img {
        max-width: 200px;
        width: 200px;
        height: 200px;
    }
`