import React from 'react';
import { Container } from '../styles/commonStyles';
import Card from './Card';

const DisplayCards = () => {
    return (
        <>

            <Container width="100vw" mobilewidth="100vw" height="100vh" mobileFlexDirection="column">

                <Card />
                <Card />
                <Card />
                <Card />
            </Container>

        </>

    )
}

export default DisplayCards;

