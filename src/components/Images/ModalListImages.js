import { useEffect, useState } from 'react';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { ModalStyle } from '../../Utils/ModalStyle';
import { getAllImages } from '../../services/imageApiService';
import './images.css';

// import ModalNewImage from './ModalNewImage';



const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    maxHeight: "90vh",
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 10,
    pt: 2,
    px: 4,
    pb: 3,
};



/**
 * Component ModalListImage, display a button and show modal by clicking on it.
 * @returns {React.HTML} REACT.HTML
 */
const ModalListImage = ({ imageID = 0 }) => {

    // const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listImages, setListImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(imageID);

    useEffect(() => {
        getAllImages()
            .then(res => {
                if (res.status === 200) {
                    setListImages(res.data);
                }
            });
    }, []);

    var imageURL;

    if (selectedImage == 0) {
        imageURL = "https://via.placeholder.com/500x500.png?text=NONE";
    }
    else {
        imageURL = "https://via.placeholder.com/640x500.png/0077ff?text=accusamus";
    }

    return (
        <div>
            <Card className="ListImages-button-modal">
                <CardActionArea
                    onClick={() => { setIsModalOpen(true) }}
                >
                    <CardMedia
                        component="img"
                        className="ListImages-button-modal-image"
                        // image="127.0.0.1:8000/img/icone image.svg"
                        image={imageURL}
                    />
                    <Typography
                        component="div"
                        className="ListImages-button-modal-hover"
                    >
                        Choisir une image
                    </Typography>
                </CardActionArea>
            </Card>

            <Modal
                closeAfterTransition
                open={isModalOpen}
            // onClose={() => { }}
            >
                <Fade in={isModalOpen}>
                    <Box sx={modalStyle}>
                        <div className="ListImages-modal-title">Liste des images</div>
                        <div className='filter'>
                            <TextField
                                id="outlined-basic"
                                label="Recherche"
                                variant="outlined"
                                type="text"
                                name="search"
                                size='small'
                            // onChange={((e) => { setSearchTerm(e.target.value) })}
                            />
                        </div>
                        <div className="ListImages-modal-container-card">
                            {
                                listImages.map(image => {
                                    return (
                                        <Card key={image.id} className="ListImages-modal-card">
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    className="ListImages-modal-card-image"
                                                    image={image.IMG_uri}
                                                />
                                                <Typography
                                                    component="div"
                                                    className="ListImages-modal-card-hover"
                                                >
                                                    Sélectionner
                                                </Typography>
                                                <Typography
                                                    className="ListImages-modal-card-text"
                                                    variant="subtitle2"
                                                    component="div">
                                                    {image.IMG_name}
                                                </Typography>
                                            </CardActionArea>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                        <Button onClick={() => { setIsModalOpen(false) }}>VALIDER</Button>
                        <Button onClick={() => { setIsModalOpen(false) }}>ANNULER</Button>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}

export default ModalListImage;