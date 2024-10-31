'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { DisplayCardsContainer } from '../styles/CardStyles';
import { TitleContainer } from '../styles/commonStyles';
import loadImages from "./functions/gatherCardImages";

const DisplayCards = ({ images }) => {
    const [imageFiles, setImageFiles] = useState([]);

    if (images) {
        useEffect(() => {
            const fetchImages = async () => {
                const loadedImages = await loadImages(images);
                setImageFiles(loadedImages);
            };
            fetchImages();
        }, [images]);
    } else {
        setImageFiles([]);
    }

    return (
        <div>
            <TitleContainer>HELLO</TitleContainer>
            <DisplayCardsContainer>
                {imageFiles.length > 0 ? imageFiles.map((image, index) => (
                    <Card key={index} image={image} />
                )) : (<Card />)}
            </DisplayCardsContainer>
        </div>
    );
};

export default DisplayCards;
