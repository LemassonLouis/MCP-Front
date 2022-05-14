import { forwardRef, useEffect, useImperativeHandle, useState, useContext } from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import UserContext from '../../Contexts/UserContext';
import { deleteImage, getImage, postImage } from '../../services/imageApiService';
import './ChooseImage.css';


const Input = styled('input')({
    display: 'none',
});


const ChooseImage = ({ imgID = undefined }, ref) => {

    const { currentUser } = useContext(UserContext);
    const defaultIMG = "https://via.placeholder.com/500x500.png?text=NONE";

    const [image, setImage] = useState({ id: undefined, URI: undefined });
    const [inputURI, setInputURI] = useState(defaultIMG);

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

    /**
     * Method of the component that can be accessible from the parent.
     */
    useImperativeHandle(ref, () => ({
        doChanges() {
            if (image.URI != inputURI) {

                if (image.URI != undefined) {
                    deleteImage(image.id).then(req => console.log("image removed / req", req));
                }

                if (inputURI != defaultIMG) {
                    postImage(inputURI).then(req => {
                        console.log("image add / req", req);
                        return req.data.id;
                    });
                }
            }

            return null;
        }
    }));


    return (
        <div className='ChooseImage'>
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
 * - doChanges() : imgID | null. *return imgID if a change need a post to the API or return null in the other cases.*
 * @param {Number} [imgID] - Int who define the image to show if an image was already set.
 * @param {import('react').Ref} refName - The ref `const <refName> = useRef()` created in the parent component.
 * @returns {React.HTML} REACT.HTML
 */
export default forwardRef(ChooseImage);