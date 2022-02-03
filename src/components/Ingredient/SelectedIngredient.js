import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { removeIngredient } from '../../services/ingredientApiService';
import Button from '@mui/material/Button';

const SelectedIngredient = () => {

    const navigate = useNavigate();

    /**
     * Retrieving data from the state sent by ingredientList with state={i}
     */
    const location = useLocation();
    const locationState = location.state;
    console.log(locationState);

    function sendRemoveIngredient(){
        removeIngredient(locationState.id).then(
            (res) => res.status === 204 && navigate('/ingredient')
        ).catch((err) => console.log(err))
    }

    return (
        <div>
            <Button color="warning" variant="contained" onClick={() => navigate(-1)}>Retour</Button>
            <br />
            <br />
            Nom : {locationState?.ING_name} <br />
            Prix: {locationState?.ING_price} € / {locationState?.ING_unit} <br />
            {locationState?.ING_allergen && 'Allergène'} <br />
            {locationState?.ING_vege && 'Végétarien'} <br />
            {locationState?.ING_isArchive && 'Archivé'}
            <br />
            <br />
            <Button color="error" variant="contained" onClick={() => sendRemoveIngredient()}>Supprimer</Button>
        </div>
    );
};

export default SelectedIngredient;