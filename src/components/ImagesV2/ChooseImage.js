import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { getImage } from '../../services/imageApiService';
import './ChooseImage.css';


const Input = styled('input')({
    display: 'none',
});


const ChooseImage = ({ imgID = undefined }, ref) => {

    /**
     * Method of the component that can be accessible from the parent.
     */
    useImperativeHandle(ref, () => ({
        addImage() {
            console.log("add an image : post it to the API and get the img id");
            return "imageID";
        },
        removeImage() {
            console.log("remove an image : delete the image on the API");
        }
    }));
    const defaultIMG = "https://via.placeholder.com/500x500.png?text=NONE";

    const [image, setImage] = useState({ id: imgID, URI: defaultIMG });
    const [inputURI, setInputURI] = useState('');

    useEffect(() => {
        if (imgID != undefined && imgID != null) {
            getImage(imgID)
                .then(res => {
                    if (res.status === 200) {
                        setImage({ id: res.data.id, URI: res.data.IMG_uri });
                        setInputURI(res.data.IMG_uri);
                    }
                });
        }
    }, []);


    return (
        <div>
            <div className='ChooseImage-button' style={{
                backgroundImage: `url(${inputURI})`
            }}>
                <label>
                    <Input
                        accept="image/*"
                        type="file"
                        onChange={(event) => { setInputURI(event.target.value) }}
                    // error : "Not allowed to load local resource: file:///C:/%C3%BAkepath%0Brigitte_by_liang_xing_40x30.jpg"
                    // just need to check my notification from https://stackoverflow.com/questions/71770607/react-not-allowed-to-load-local-resource
                    />
                    <Typography
                        component="div"
                        className="ChooseImage-button-hover"
                    >
                        Choisir une image
                    </Typography>
                </label>
            </div>
            {inputURI != defaultIMG ?
                <IconButton
                    aria-label="delete"
                    onClick={() => { setInputURI(defaultIMG) }}
                >
                    <DeleteIcon />
                </IconButton>
                : ''
            }
        </div>
    );
}


/**
 * Component ChooseImage, display an image who is a file input who allowed images only.
 * - **In the parent create `const <refName> = useRef()`**
 * - **Call the component with `<ChooseImage ref={refName} />`**
 * - **Use method with `<refName>.current.<method>`**
 * -- Methods available :
 * - addImage()
 * - removeImage()
 * @param {Number} [imgID] - Int who define the image to show if an image was already set.
 * @param {import('react').Ref} refName - The ref `const <refName> = useRef()` created in the parent component.
 * @returns {React.HTML} REACT.HTML
 */
export default forwardRef(ChooseImage);