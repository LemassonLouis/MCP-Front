import React from 'react';
import {useLocation} from 'react-router-dom'

const SelectedIngredient = () => {

    const location = useLocation();
    const locationState = location.state;
    console.log(location);
    return (
        <div>
            Nom : {locationState.ING_name} <br />
            Prix: {locationState.ING_price} € / {locationState.ING_unit} <br />
            {locationState.ING_allergen && 'Allergène'} <br />
            {locationState.ING_vege && 'Végétarien'} <br />
            {locationState.ING_isArchive && 'Archivé'}
        </div>
    );
};

export default SelectedIngredient;