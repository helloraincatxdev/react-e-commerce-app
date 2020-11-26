import style from 'styled-components';

export const MainCardItem = style.div`
    max-width: 200px;
    width: 200px;
    height: 280px;
    background: pink;
    overflow: hidden;

    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    }
    
    img {
        width: 200px;
        // height: 200px;
    }
    p {
        color: teal;
    }
`
export const ImgWrap = style.div`
    max-width: 200px;
    background: teal;
`