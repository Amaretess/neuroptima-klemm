'use client'
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || "row"};
    justify-content: ${(props) => props.justifyContent || "center"};
    align-items: ${(props) => props.alignItems || "center"};
    padding: ${(props) => props.padding || '1rem'};
    margin: ${(props) => props.margin || '0rem'};
    margin-top: ${(props) => props.margintop || '0rem'};
    margin-bottom: ${(props) => props.marginbottom || '0rem'};
    height: ${(props) => props.height || '1rem'};
    width: ${(props) => props.width || '1rem'};
    border: ${(props) => props.border || '1px solid black'};
    background-color: ${(props) => props.bgColor || 'transparent'};
    color: ${(props) => props.textColor || 'black'};


    // media query for screens smaller than 768px (mobile)
    @media (max-width: 768px) {
        width: ${(props) => props.mobilewidth || "10rem"};
        flex-direction: ${(props) => props.mobileflexdirection || "row"};
    }

`;

export const TitleContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-weight: bold;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
background-color: #fff;
padding: 50px;
width: 20rem;
border-radius: 5px;
text-align: center;
`;

export const Button = styled.button`
background-color: #0070f3;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin-top: 20px;
font-size: 16px;

&:hover {
  background-color: #005bb5;
};
`


