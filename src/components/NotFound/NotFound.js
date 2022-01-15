import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Oups ! Cette page n'existe pas !</h1>
            <button onClick={()=> navigate("/")}>Retourner à l'accueil</button>
        </div>
    );
};

export default NotFound;