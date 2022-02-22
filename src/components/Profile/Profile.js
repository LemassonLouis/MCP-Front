import React from 'react';
import { useState, useEffect, useContext } from 'react';
import NavBar from '../Common/NavBar/NavBar';
import { UserContext } from '../../App';
import { getUser } from '../../services/userApiService';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Profile = () => {

    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div>
            <h1>Bienvenue sur votre profil</h1>
            {currentUser?.email && <p>Adresse email : {currentUser?.email}</p>}
            <p>{currentUser?.firstName} {currentUser?.lastName}</p>
            <br />
            <br />
            <Button color="error" variant="contained" onClick={() => handleLogout()}>Déconnexion</Button>
            <NavBar/>
        </div>
    );
};

export default Profile;