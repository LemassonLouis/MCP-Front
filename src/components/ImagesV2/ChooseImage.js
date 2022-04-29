import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { getImage } from '../../services/imageApiService';
import './ChooseImage.css';


const Input = styled('input')({
    display: 'none',
});


/**
 * Component ChooseImage, display an image who is a file, type image, input.
 * @param {Number} [imageID] - Int who define the image to show.
 * - Default = 0 | Show the default "none" image. 
 * @returns {React.HTML} REACT.HTML
 */
const ChooseImage = ({ imageID = undefined }, ref) => {

    function handleChange(event) {
        setImageURL(event.target.value);
        // error : "Not allowed to load local resource: file:///C:/%C3%BAkepath%0Brigitte_by_liang_xing_40x30.jpg"
        // just need to check my notification from https://stackoverflow.com/questions/71770607/react-not-allowed-to-load-local-resource
    }

    useImperativeHandle(ref, () => ({
        addImage() {
            console.log("add an image : post it to the API and get the img id");
            return "imageID";
        },
        removeImage() {
            console.log("remove an image : delete the image on the API");
        }
    }));

    const [imageURL, setImageURL] = useState('https://via.placeholder.com/500x500.png?text=NONE');

    useEffect(() => {
        if (imageID != undefined && imageID != null) {
            getImage(imageID)
                .then(res => {
                    if (res.status === 200) {
                        setImageURL(res.data.IMG_uri);
                    }
                });
        }
    }, []);


    return (
        <div className='ChooseImage-button' style={{
            backgroundImage: `url(${imageURL})`
        }}>
            <label>
                <Input
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                />
                <Typography
                    component="div"
                    className="ChooseImage-button-hover"
                >
                    Choisir une image
                </Typography>
            </label>
        </div >
    );
}

export default forwardRef(ChooseImage);