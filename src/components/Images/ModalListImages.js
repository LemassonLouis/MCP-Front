import React, { useState } from 'react';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ModalStyle } from '../../Utils/ModalStyle';
// import ModalNewImage from './ModalNewImage';

// import imageApiService, { getAllImages } from '../../services/imageApiService';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    'max-width': 800,
    bgcolor: 'background.paper',
    border: '1px solid #111',
    'border-radius': 10,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};



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
                // hideBackdrop
                closeAfterTransition
                open={openModal}
            // onClose={() => { setOpenModal(false) }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        {/* <ModalNewImage /> */}
                        <h2 id="parent-modal-title">Liste des images</h2>
                        <p id="parent-modal-description">
                            Recherche<br />
                            (ajouter une image)<br />
                            Liste des images<br />
                            (valider)<br />
                        </p>
                        <Button onClick={() => { setOpenModal(false) }}>VALIDER</Button>
                        <Button onClick={() => { setOpenModal(false) }}>ANNULER</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}