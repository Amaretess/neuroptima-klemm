'use client'
import React from 'react'
import { Button, ModalContent, Overlay } from '../styles/commonStyles'

const Modal = ({ showModal, closeModal }) => {

    if (!showModal) return null;

    return (
        <Overlay width="2rem" height="2rem">
            <ModalContent>
                <h1>Modal</h1>
                <h1>TAKE 10% OFF OUR SUPPLEMENTS TODAY WHEN YOU MAKE AN ACCOUNT</h1>
                <Button onClick={closeModal}>X</Button>
            </ModalContent>
        </Overlay>
    )
};

export default Modal;