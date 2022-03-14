import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { deleteSupplier } from '../../services/SupplierService';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import '../Common/Footer/FooterResponsiveBtn.css'

const SelectedSupplier = () => {

    const navigate = useNavigate();

    const [load, setLoad] = useState(false);

    const location = useLocation();
    const locationState = location.state;
    console.log(locationState);

    function sendDeleteSupplier(){
        setLoad(true)
        deleteSupplier(locationState.id).then(
            (res) => res.status === 204 && navigate('/suppliers')
        ).catch((err) => console.log(err))
    }

    return (
        <div>
            <ResponsiveHeader title={`Supplier ${locationState.SUP_name}`}/>
            <br />
            <br />
            Nom : {locationState?.SUP_name} <br />
            Adresse: {locationState?.SUP_address} <br />
            Code postal : {locationState?.SUP_postal_code} <br />
            Ville : {locationState?.SUP_city} <br />
            Téléphone : {locationState?.SUP_phone} <br />
            Mail : {locationState?.SUP_mail} <br />
            <br />
            <br />
            <LoadingButton className='webapp-layout__desktop--btn' loading={load} color="error" variant="contained" onClick={() => sendDeleteSupplier()}>Supprimer le fournisseur</LoadingButton>
            <FooterResponsiveBtn color="error" load={load} txt="Supprimer"/>
        </div>
    );
};

export default SelectedSupplier;