import React, { useState } from 'react';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { ModalStyle } from '../../Utils/ModalStyle';

// import ModalNewImage from './ModalNewImage';
// import imageApiService, { getAllImages } from '../../services/imageApiService';



const modalStyle = {
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



const cardStyle = {
    position: 'relative',
    margin: 'auto',
    marginBottom: 1,
    width: '30%',
    minWidth: 210,
    maxWidth: 300,
};



const textStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '15pt',
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0,
    transition: '0.3s',
    '&:hover': {
        opacity: 1,
    }
};



const imageStyle = {
    width: "100%",
    height: "23vw",
    maxHeight: 250,
    minHeight: 160,
    objectFit: "cover !important",
};



/**
 * Component ModalListImage, display a button and show modal by clicking on it.
 * @returns {React.HTML} REACT.HTML
 */
const ModalListImage = ({ imageID }) => {

    // const [images, setImages] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    const [openedModal, setOpenedModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(imageID);

    var imageURL;

    if (selectedImage == 0) {
        imageURL = "https://via.placeholder.com/500x500.png?text=NONE";
    }
    else {
        imageURL = "https://via.placeholder.com/640x500.png/0077ff?text=accusamus";
    }

    // imageApiService.getAllImages().then(res => {
    //     if (res.status == 200) {
    //         setImages(res.data);
    //     }
    // }).catch(err => {
    //     console.log(err);
    // });

    return (
        <div>
            <Card sx={cardStyle}>
                <CardActionArea
                    onClick={() => { setOpenedModal(true) }}
                >
                    <CardMedia
                        component="img"
                        sx={imageStyle}
                        // image="127.0.0.1:8000/img/icone image.svg"
                        image={imageURL}
                    />
                    <Typography
                        component="p"
                        sx={textStyle}
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
                    <Box sx={modalStyle}>
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

export default ModalListImage;