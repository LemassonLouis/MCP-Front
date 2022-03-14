import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import { editUser } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import '../Common/Footer/FooterResponsiveBtn.css'

const EditProfile = () => {

    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [load, setLoad] = useState(false);

    /**
     * Recovery of data entered by the user in the inputs
     */
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInputs(values => ({ ...values, [name]: value }));
    }

    /**
     * in progress !!!
     */
    const editProfile = (e) => {
        e.preventDefault();
        navigate(`/profile/${currentUser?.id}/`)
        // setLoad(true);
        // let data = {
        //     email : inputs.email,
        //     firstName : inputs.firstName,
        //     lastName : inputs.lastName,
        // }
        // console.log(data);
        // editUser(data, currentUser).then(
        //     (res) => res.status === 200 && navigate(`/profile/${currentUser?.id}/`)
        // ).catch((err) => {
        //     console.log(err)
        //     setLoad(false)
        // })
    }
    return (
        <div>
            <ResponsiveHeader title="Modifier mon profil" />
            <br />
            <br />
            <form onSubmit={e => editProfile(e)}>
                <div>
                    <TextField
                        required
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        onInput={handleChange} />
                    <TextField
                        required
                        label="Prénom"
                        variant="outlined"
                        type="text"
                        name="firstName"
                        onInput={handleChange} />
                    <br />
                    <br />
                    <TextField
                        required
                        label="Nom"
                        variant="outlined"
                        type="text"
                        name="lastName"
                        onInput={handleChange} />
                    <br />
                    <br />
                </div>
                <LoadingButton className='webapp-layout__desktop--btn' type="submit" loading={load} color="primary" variant="contained">Modifier</LoadingButton>
                <FooterResponsiveBtn color="primary" load={load} txt="Modifier" />
            </form>
        </div>
    );
};

export default EditProfile;