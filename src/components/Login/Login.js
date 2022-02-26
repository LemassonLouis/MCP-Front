import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { TextField, Alert } from '@mui/material';
import { login } from '../../services/userApiService';
import LoadingButton from '@mui/lab/LoadingButton';

const Login = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [validInput, setValidInput] = useState(false);
    const [alert, setAlert] = useState(false);
    const [load, setLoad] = useState(false);

    /**
     * Implementation of a 3sec timer for the disappearance of Alert and validInput when the identifiers are incorrect
     */
    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false)
                setValidInput(false)
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
        setInputs(values => ({ ...values, [name]: value }));
    }

    const signIn = (e) => {
        setLoad(true);
        e.preventDefault();
        let data = {
            username: inputs.username,
            password: inputs.password
        }
        console.log(data);
        login(data).then(
            (res) => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('connectedUser', JSON.stringify(res.data.data));
                    setCurrentUser(res.data.data);
                    navigate('/')
                }
            }
        ).catch((err) => {
            if (err.response.status === 401) {
                setValidInput(true)
                setAlert(true)
                setLoad(false)
            }
        })

    }

    return (
        <>
            <h3>Connexion</h3>
            <br />
            <br />
            <form onSubmit={e => signIn(e)}>
                <TextField
                    required
                    error={validInput}
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="username"
                    onInput={handleChange} />
                <br />
                <br />
                <TextField
                    required
                    error={validInput}
                    label="Mot de passe"
                    variant="outlined"
                    type="password"
                    name="password"
                    onInput={handleChange} />
                <br />
                <br />
                <LoadingButton type="submit" loading={load} color="primary" variant="contained">Connexion</LoadingButton>
            </form>
            <br />
            <br />
            <p>Pas encore de compte ? <span className="spanBtn" onClick={() => navigate("/registration")}> S'incrire</span> </p>
            <br />
            <br />
            {
                /****Conditional rendering if alert = true****/

                alert &&
                <Alert className='alert' variant="outlined" severity="error">
                    Identifiants incorrects !
                </Alert>
            }
        </>
    );
};

export default Login;