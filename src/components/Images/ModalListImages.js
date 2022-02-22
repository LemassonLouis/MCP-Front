import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { ModalStyle } from '../../Utils/ModalStyle';
// import ModalNewImage from './ModalNewImage';

// import imageApiService, { getAllImages } from '../../services/imageApiService';


/**
 * Component ModalListImage, display a button and show modal by clicking on it.
 * @returns {React.HTML} REACT.HTML
 */
export default function ModalListImage() {

    // const [images, setImages] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    const [openModal, setOpenModal] = useState(false);

    // imageApiService.getAllImages().then(res => {
    //     if (res.status == 200) {
    //         setImages(res.data);
    //     }
    // }).catch(err => {
    //     console.log(err);
    // });

    return (
        <div>
            <Button onClick={(() => { setOpenModal(true) })}>Changer d'image</Button>
            <Modal
                hideBackdrop
                open={openModal}
            // onClose={() => { setOpenModal(false) }}
            >
                <Box sx={{ ModalStyle, width: 500 }}>
                    {/* <ModalNewImage /> */}
                    <h2 id="parent-modal-title">Liste des images</h2>
                    <p id="parent-modal-description">
                        Recherche<br />
                        (ajouter une image)<br />
                        Liste des images<br />
                        (valider)<br />
                    </p>
                    <Button onClick={() => { setOpenModal(false) }}>VALIDER</Button>
                </Box>
            </Modal>
        </div>
    );
}