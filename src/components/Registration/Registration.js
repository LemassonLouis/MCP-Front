import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { registration } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';

const Registration = () => {

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
        setInputs(values => ({...values, [name]: value}));
    }

    const signUp = (e) => {
        setLoad(true);
        e.preventDefault();
        let data = {
            firstName : inputs.firstName,
            lastName : inputs.lastName,
            username : inputs.username,
            password: inputs.password
        }
        console.log(data);
        registration(data).then(
            (res) => res.status === 201 && navigate('/login')
        ).catch((err) => console.log(err))

    }
    
    return (
        <>
        <h3>Inscription</h3>
        <br />
        <br />
            <form onSubmit={e => signUp(e)}>
                <TextField 
                    required
                    label="Prénom" 
                    variant="outlined" 
                    type="text" 
                    name="firstName"
                    onInput={handleChange}  />
                <TextField 
                    required
                    label="Nom" 
                    variant="outlined" 
                    type="text" 
                    name="lastName" 
                    onInput={handleChange}  />
                <br />
                <br />
                <TextField 
                    required
                    label="Email" 
                    variant="outlined" 
                    type="email" 
                    name="username" 
                    onInput={handleChange}  />
                <br/>
                <br />
                <TextField
                    required 
                    label="Mot de passe" 
                    variant="outlined" 
                    type="password" 
                    name="password" 
                    onInput={handleChange}  />
                <br />
                <br />
                <LoadingButton type="submit" loading={load} color="primary" variant="contained">Inscription</LoadingButton>
            </form>
            <br />
            <br />
            <p>Déjà un compte ? <span className="spanBtn" onClick={() => navigate("/login")}> Connexion</span> </p>
        </>
    );
};

export default Registration;