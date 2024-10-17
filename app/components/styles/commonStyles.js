'use client'
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: ${(props) => props.justifyContent || "center"};
    align-items: ${(props) => props.alignItems || "center"};
    padding: ${(props) => props.padding || '1rem'};
    margin: ${(props) => props.margin || '1rem'};
    height: ${(props) => props.height || '1rem'};
    width: ${(props) => props.width || '1rem'};
    border: ${(props) => props.border || '1px solid black'};
    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.textColor || 'black'};


    // media query for screens smaller than 768px (mobile)
    @media (max-width: 768px) {
        width: ${(props) => props.mobileWidth || "10rem"};
    }

`;


