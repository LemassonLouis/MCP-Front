import { useState } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import './ChooseImage.css';


const Input = styled('input')({
    display: 'none',
});


/**
 * Component ChooseImage, display an image who is a file, type image, input.
 * @returns {React.HTML} REACT.HTML
 */
const ChooseImage = (/*{ imageID = 0 }*/) => {

    function handleChange(event) {
        setImageURL(event.target.value);
        // error : Not allowed to load local resource: file:///C:/%C3%BAkepath%0Brigitte_by_liang_xing_40x30.jpg
        // just need to check my notification from https://stackoverflow.com/questions/71770607/react-not-allowed-to-load-local-resource
    }

    const [imageURL, setImageURL] = useState('https://via.placeholder.com/500x500.png?text=NONE');

    // useEffect(() => {
    //     getAllImages()
    //         .then(res => {
    //             if (res.status === 200) {
    //                 setListImages(res.data);
    //             }
    //         });
    // }, []);

    // if (selectedImage == 0) {
    //     imageURL = "https://via.placeholder.com/500x500.png?text=NONE";
    // }
    // else {
    //     imageURL = "https://via.placeholder.com/640x500.png/0077ff?text=accusamus";
    // }

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

export default ChooseImage;