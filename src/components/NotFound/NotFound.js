/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:22
 * @modify date 2022-04-26 18:22:56
 * @desc [description]
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Oups ! Cette page n'existe pas !</h1>
            <Button variant="outlined" onClick={()=> navigate("/")}>Retourner à l'accueil</Button>
        </div>
    );
};

export default NotFound;