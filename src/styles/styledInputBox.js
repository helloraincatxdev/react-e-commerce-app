import style from 'styled-components';

export const InputWrap = style.div`
    max-width: 700px;
    width: 700px;
    height: 40px;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        fill: #D0D1D3;
        margin-left: 10px;
        transform: translateY(-50%);
    }

    input {
        width: 100%;
        height: 100%;
        outline: none;
        padding-left: 40px;
        font-size: 18px;
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0px 0px 0px 1px #e7e7e9 inset;
        &:hover {
            border-color: rgba(0,0,0,0.1);
            box-shadow: 0 0 0 4px rgba(234,76,137,0.1);
        }
        &:focus {
            border-color: rgba(234,76,137,0.4);
            outline: none;
            box-shadow: 0 0 0 4px rgba(234,76,137,0.1);
        }
    }
`