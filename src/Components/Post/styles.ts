import styled from "styled-components";

export const ImageContainer = styled.div`
    height: 614px;
    width: 614px;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;

    @media(max-width: 1000px) {
        height: 600px;
        width: 600px;
    }
    
    @media(max-width: 612px) {
        width: 100vw;
        height: 100vw;
    }
`

export const ButtonsImg = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-right: 16px;
    transition: .1s;

    :hover {
        opacity: .5;
    }
    `