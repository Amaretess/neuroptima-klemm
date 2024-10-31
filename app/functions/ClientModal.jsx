'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../components/common/Modal';

const ClientModal = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000)
        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => setShowModal(false);


    return (
        <Modal showModal={showModal} closeModal={closeModal} />
    );
}

export default ClientModal;