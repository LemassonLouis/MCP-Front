import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { removeIngredient } from '../../services/ingredientApiService';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import '../Common/Footer/FooterResponsiveBtn.css'

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
            <ResponsiveHeader title={`Ingrédient ${locationState.ING_name}`}/>
            <br />
            <br />
            Nom : {locationState?.ING_name} <br />
            Prix: {locationState?.ING_price} € / {locationState?.ING_unit} <br />
            {locationState?.ING_allergen && 'Allergène'} <br />
            {locationState?.ING_vege && 'Végétarien'} <br />
            {locationState?.ING_isArchive && 'Archivé'}
            <br />
            <br />
            <LoadingButton className='webapp-layout__desktop--btn' loading={load} color="error" variant="contained" onClick={() => sendRemoveIngredient()}>Supprimer</LoadingButton>
            <FooterResponsiveBtn color="error" load={load} txt="Supprimer"/>
        </div>
    );
};

export default SelectedIngredient;