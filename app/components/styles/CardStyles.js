"use client";
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "5rem"};
    border: 2px solid red;
    border-radius: 25px;
    margin: ${(props) => props.margin || "0rem"};
    height: ${(props) => props.height || "5rem"};

    @media (max-width: 768px) {
        width: ${(props) => props.mobilewidth || "5rem"};
        height: ${(props) => props.mobileheight || "5rem"}
    }
`

export const DisplayCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: ${(props) => props.flexdirection || "row"};
    

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

`