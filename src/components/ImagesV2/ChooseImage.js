// LEMASSON Louis

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
    const defaultIMG = process.env.REACT_APP_RESSOURCES_IMAGES + "DefaultImage.png";

    const [image, setImage] = useState({ id: undefined, URI: undefined });
    const [input, setInput] = useState({ URI: defaultIMG, file: undefined });

    useEffect(() => {
        if (imgID != undefined && imgID != null) {
            getImage(imgID)
                .then(res => {
                    if (res.status === 200) {
                        setImage({ id: res.data.id, URI: res.data.IMG_uri });
                        setInput({ URI: res.data.IMG_uri });
                    }
                });
        }
    }, []);

    /**
     * Method of the component that can be accessible from the parent.
     */
    useImperativeHandle(ref, () => ({
        async doChanges() {
            if (image.URI != input.URI) {

                if (image.URI != undefined) {
                    deleteImage(image.id);
                }

                if (input.URI != defaultIMG) {
                    const imageData = {
                        file: input.file,
                        userID: currentUser.id
                    }

                    let result = await postImage(imageData);
                    return result.data.id;
                }
            }

            return null;
        }
    }));

    const handleInputChange = event => {
        const [file] = event.target.files;  // Get the files from the image input
        if (file) {
            setInput({ URI: URL.createObjectURL(file), file: file })
        }
    }


    return (
        <div id="ChooseImage-Container" className='ChooseImage'>
            <div
                id="ChooseImage-Button"
                className='ChooseImage-button'
                style={{
                    backgroundImage: `url(${input.URI})`
                }}
            >
                <label>
                    <Input
                        id="ChooseImage-Input"
                        accept="image/*"
                        type="file"
                        onChange={handleInputChange}
                    />
                    <Typography
                        component="div"
                        id="ChooseImage-Text"
                        className="ChooseImage-button-hover"
                    >
                        Choisir une image
                    </Typography>
                </label>
            </div>
            {input.URI != defaultIMG ?
                <IconButton
                    id="ChooseImage-Delete"
                    aria-label="delete"
                    onClick={() => { setInput({ URI: defaultIMG, file: undefined }) }}
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