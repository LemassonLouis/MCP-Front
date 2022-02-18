import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { login } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';

const Login = () => {

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

    const signIn = (e) => {
        setLoad(true);
        e.preventDefault();
        let data = {
            username : inputs.username,
            password: inputs.password
        }
        console.log(data);
        login(data).then(
            (res) => {
                if(res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('connectedUser', JSON.stringify(res.data.data));
                    navigate('/')
                }
            }
        ).catch((err) => console.log(err))

    }
    
    return (
        <>
        <h3>Connexion</h3>
        <br />
        <br />
            <form onSubmit={e => signIn(e)}>
                <TextField 
                    required
                    label="Email" 
                    variant="outlined" 
                    type="text" 
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
                <LoadingButton type="submit" loading={load} color="primary" variant="contained">Connexion</LoadingButton>
            </form>
            <br />
            <br />
            <p>Pas encore de compte ? <span className="spanBtn" onClick={() => navigate("/registration")}> S'incrire</span> </p>
        </>
    );
};

export default Login;