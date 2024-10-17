import React from 'react';
import { Container } from '../styles/commonStyles';
import Card from './Card';

const DisplayCards = () => {
    return (
        <Container width="95vw" mobileWidth="90vw" height="40vh">
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default DisplayCards;