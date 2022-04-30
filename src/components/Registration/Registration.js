/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:53
 * @modify date 2022-04-25 20:25:54
 * @desc [description]
 */
import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {TextField, Alert} from '@mui/material';
import { registration } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';

const Registration = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [alert, setAlert] = useState(false);
    const [validInputPwd, setValidInputPwd] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if(alert){
                setAlert(false)
                setValidInputPwd(false)
            }
        }, 4000)
    }, [alert]);

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
        if(inputs.password === inputs.confirm){
            registration(data).then(
                (res) => res.status === 201 && navigate('/login')
            ).catch((err) => {
                console.log(err)
                setLoad(false)
            })
        }else{
            setAlert(true)
            setValidInputPwd(true)
            setLoad(false)
        }

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
                    error={validInputPwd}
                    label="Mot de passe" 
                    variant="outlined" 
                    type="password" 
                    name="password" 
                    onInput={handleChange}  />
                <br />
                <br />
                <TextField
                    required 
                    error={validInputPwd}
                    label="Confirmer" 
                    variant="outlined" 
                    type="password" 
                    name="confirm" 
                    onInput={handleChange}  />
                <br />
                <br />
                <LoadingButton type="submit" loading={load} color="primary" variant="contained">Inscription</LoadingButton>
            </form>
            <br />
            <br />
            <p>Déjà un compte ? <span className="spanBtn" onClick={() => navigate("/login")}> Connexion</span> </p>
            <br />
            <br />
            {
                /****Conditional rendering if alert = true****/

                alert &&
                <Alert className='alert' variant="outlined" severity="error">
                    Les mots de passe ne sont pas identiques !
                </Alert>
            }
        </>
    );
};

export default Registration;