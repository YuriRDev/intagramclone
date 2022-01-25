import styled from "styled-components";

export const HeaderContainer = styled.div` 
    height: 100%;
    width: 100%;
    max-width: 975px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px;
    @media(max-width: 612px) {
        padding: 0px 16px;
    }
    `

export const SearchBar = styled.div`
    height: 36px;
    width: 268px;
    background-color: #efefef;
    border-radius: 8px;
    margin-left: 164px;
    padding: 6px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    visibility: visible;

    @media(max-width: 863px) {
        margin-left: 16px;
    }

    @media(max-width: 612px) {
        visibility: hidden;
        margin-left: 0px;
        width: 0px;
    }
`

export const IconsImg = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 22px;
    visibility: visible;

    @media(max-width: 428px) {
        visibility: hidden;
        width: 0px;
    }
`

export const PhotoImg = styled.img`
    height: 24px;
    width: 24px;
    border-radius: 1000px;
    background-color: #E7E7E7;

    @media(max-width: 428px) {
        height: 32px;
        width: 32px;
    }
`