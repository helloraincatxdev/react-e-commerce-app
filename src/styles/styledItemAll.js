import style from 'styled-components';

export const ItemAll = style.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-template-rows: auto;
    gap: .5rem;
`