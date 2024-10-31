import React from 'react';
import { CardContainer } from '../styles/CardStyles';

const Card = ({ image }) => {

    return (
        <CardContainer mobilewidth="20rem" mobileheight="10rem" margin="1rem" height="40vh" width="20rem" >
            <img src={image} />
        </CardContainer>
    );
};

export default Card;