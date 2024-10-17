"use client";
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
    border: 2px solid red;
    height: ${(props) => props.height || "5rem"};

    @media (max-width: 768px) {
        width: ${(props) => props.mobileWidth || "5rem"};
        height: ${(props) => props.mobileHeight || "5rem"}
    }
`