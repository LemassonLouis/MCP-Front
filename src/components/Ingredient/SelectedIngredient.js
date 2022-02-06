import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { removeIngredient } from '../../services/ingredientApiService';
import Button  from '@mui/material/Button';
import { useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

const SelectedIngredient = () => {

    const navigate = useNavigate();

    const [load, setLoad] = useState(false);
    /**
     * Retrieving data from the state sent by ingredientList with state={i}
     */
    const location = useLocation();
    const locationState = location.state;
    console.log(locationState);

    function sendRemoveIngredient(){
        setLoad(true)
        removeIngredient(locationState.id).then(
            (res) => res.status === 204 && navigate('/ingredient')
        ).catch((err) => console.log(err))
    }

    return (
        <div>
            <Button variant="outlined" onClick={() => navigate(-1)}>Retour</Button>
            <br />
            <br />
            Nom : {locationState?.ING_name} <br />
            Prix: {locationState?.ING_price} € / {locationState?.ING_unit} <br />
            {locationState?.ING_allergen && 'Allergène'} <br />
            {locationState?.ING_vege && 'Végétarien'} <br />
            {locationState?.ING_isArchive && 'Archivé'}
            <br />
            <br />
            <LoadingButton loading={load} color="error" variant="contained" onClick={() => sendRemoveIngredient()}>Supprimer</LoadingButton>
        </div>
    );
};

export default SelectedIngredient;