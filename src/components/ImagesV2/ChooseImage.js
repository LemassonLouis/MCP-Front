import Button from '@mui/material/Button';

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

    return (
        <div>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
        </div>
    );
}

export default ChooseImage;