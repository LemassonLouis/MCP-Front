import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
    display: 'none',
});


/**
 * Component ChooseImage, display a button ImageFile.
 * @returns {React.HTML} REACT.HTML
 */
const ChooseImage = (/*{ imageID = 0 }*/) => {

    // const [listImages, setListImages] = useState([]);

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

    const style = {
        backgroundImage: 'url(https://via.placeholder.com/500x500.png?text=NONE)'
    };

    return (
        <div className='ChooseImage-button' style={style}>
            <label>
                <Input
                    accept="image/*"
                    type="file"
                />
                <Typography
                    component="div"
                    className="ChooseImage-button-hover"
                >
                    Choisir une image
                </Typography>
            </label>
        </div>
    );
}

export default ChooseImage;