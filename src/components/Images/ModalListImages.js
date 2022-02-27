import React, { useState } from 'react';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { ModalStyle } from '../../Utils/ModalStyle';
import { autocompleteClasses } from '@mui/material';
import { formatRelative } from 'date-fns';

// import ModalNewImage from './ModalNewImage';
// import imageApiService, { getAllImages } from '../../services/imageApiService';



const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    bgcolor: 'background.paper',
    border: '1px solid #111',
    borderRadius: 4,
    boxShadow: 10,
    pt: 2,
    px: 4,
    pb: 3,
};



const card = {
    position: 'relative',
    margin: 'auto',
    marginBottom: 1,
    width: '70%',
    maxWidth: 350
};



const texte = {
    position: "absolute",
    top: "50%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "none",
};



/**
 * Component ModalListImage, display a button and show modal by clicking on it.
 * @returns {React.HTML} REACT.HTML
 */
export default function ModalListImage() {

    // const [images, setImages] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    const [openedModal, setOpenedModal] = useState(false);

    // imageApiService.getAllImages().then(res => {
    //     if (res.status == 200) {
    //         setImages(res.data);
    //     }
    // }).catch(err => {
    //     console.log(err);
    // });

    return (
        <div>
            {/* <Button onClick={() => { setOpenedModal(true) }}>Choisir une image</Button> */}
            {/* <ButtonBase
                onClick={() => { setOpenedModal(true) }}
            >
                <img id="bon" src="127.0.0.1:8000/img/icone image.svg" />
                <p>Choisir une image</p>
            </ButtonBase > */}
            <Card sx={card}>
                <CardActionArea
                    onClick={() => { setOpenedModal(true) }}
                >
                    <CardMedia
                        component="img"
                        // image="127.0.0.1:8000/img/icone image.svg"
                        image="https://via.placeholder.com/640x480.png/0077ff?text=accusamus"
                    />
                    <Typography
                        component="p"
                        sx={texte}
                    >
                        Choisir une image
                    </Typography>
                </CardActionArea>
            </Card>
            <Modal
                closeAfterTransition
                open={openedModal}
            // onClose={() => { setOpenedModal(false) }}
            >
                <Fade in={openedModal}>
                    <Box sx={modal}>
                        {/* <ModalNewImage /> */}
                        <h2 id="parent-modal-title">*Liste des images*</h2>
                        <p id="parent-modal-description">
                            (Recherche) (ajouter une image)<br />
                            (Liste des images)
                        </p>
                        <Button onClick={() => { setOpenedModal(false) }}>VALIDER</Button>
                        <Button onClick={() => { setOpenedModal(false) }}>ANNULER</Button>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}