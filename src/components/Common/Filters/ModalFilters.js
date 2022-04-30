/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:22:57
 * @modify date 2022-04-27 18:43:04
 * @desc [description]
 */
import React, {useState} from 'react';
import {Modal, Box, Typography, Button} from '@mui/material';
import './ModaleFilters.css';

function ModalFilters({show, func, childToParentFiltersLength, childToParentMoreFilter}) {

    const [inputs, setInputs] = useState([]);
    const [filtersLength, setFiltersLength] = useState(0);

    // TODO use a context for pass the value of filtersLength to parent component

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        if(target.checked){
            setInputs((values) => ({ ...values, [name]: target.checked }));
        } else{
            setInputs((values) => ({ ...values, [name]: undefined }));
        }

        if(target.checked === true && filtersLength <= 1){
            setFiltersLength(filtersLength + 1);
        }else if (target.checked === false){
            setFiltersLength(filtersLength - 1);
        } 
    };

    const wrapperFunction = () => {
        func();
        childToParentFiltersLength(filtersLength);
        childToParentMoreFilter(inputs);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal
                open={show?true:false}
                onClose={func}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Filtres
                </Typography>
                <hr />
                <br />
                <div className='modalFilters-inputs'>
                    <label>
                        Végétarien 
                        <input type="checkbox" name='vege'
                            onChange={handleChange}
                            defaultChecked={inputs.vege}
                            />
                    </label>
                    
                    <label>
                        Allergène 
                        <input type="checkbox" name='allergen'
                            onChange={handleChange}
                            defaultChecked={inputs.allergen}
                            />
                    </label>
                </div>
                <br />
                <Button variant="contained" onClick={() => wrapperFunction()}>Filtrer • {filtersLength}</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalFilters;