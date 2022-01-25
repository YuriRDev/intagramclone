import styled from "styled-components";

export const DoubleComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 100%;
    margin-top: 90px;
    width: 100%;
    position: relative;
    max-width: 935px;
    @media(max-width: 1000px) {
        justify-content: center;
    }
    @media(max-width: 640px) {
        margin-top: 59px;
    }
`

export const LeftSideContainer = styled.div`
    width: 614px;
    height: 100%;
    margin-right: 28px;
    
    @media(max-width: 1000px) {
        margin-right: 0px;
    width: 600px;
    }
    
    @media(max-width: 612px) {
        width: 100vw;
    }
`

export const RightSideContainer = styled.div`
    width: 293px;
    height: 100%;
    position: fixed;
    top: 90px;
    visibility: visible;
    
    @media(max-width: 1000px) {
        visibility: hidden;
    }
`