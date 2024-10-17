import React from 'react';
import { Container } from '../styles/commonStyles';
import Card from './Card';

const DisplayCards = () => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default DisplayCards;