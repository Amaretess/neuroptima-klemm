'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { DisplayCardsContainer } from '../styles/CardStyles';
import { TitleContainer } from '../styles/commonStyles';

const DisplayCards = ({ images }) => {
    const [imageFiles, setImageFiles] = useState([]);
    if (images) {
        useEffect(() => {
            const loadImages = async () => {
                try {
                    let importedImages;

                    if (Array.isArray(images)) {
                        importedImages = images;
                    } else if (images.endsWith('.js')) {
                        const module = await import(`../images/${images}`);
                        importedImages = module.default;
                        for (let i = 0; i < importedImages.length; i++) {
                            if (/\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(importedImages[i]) && !importedImages[i].includes("/images/")) {
                                importedImages[i] = "/images/" + importedImages[i];
                            }
                        }
                    } else if (/\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(images)) {
                        const fileName = (images.includes("/images/") ? "" : "/images/") + images;
                        importedImages = [fileName];
                    } else {
                        importedImages = [images];
                    }
                    setImageFiles(importedImages);
                } catch (error) {
                    console.error("Failed to load images:", error);
                    setImageFiles([]);
                }
            };

            loadImages();
        }, [images]);
    }

    return (
        <div>
            <TitleContainer>HELLO</TitleContainer>
            <DisplayCardsContainer>
                {imageFiles ? imageFiles.map((image, index) => (
                    <Card key={index} image={image} />
                )) : (<Card />)}
            </DisplayCardsContainer>
        </div>
    );
};

export default DisplayCards;



