import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getUser } from '../../services/userApiService';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Profile = () => {

    const [user, setUser] = useState();
    const [userData, setUserData] = useState(localStorage.getItem('connectedUser') || '');
    const navigate = useNavigate();

    const connectedUser = JSON.parse(userData);

    useEffect(() => {
        getUser(connectedUser.id).then((res) => {
            res.status === 200 && setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div>
            <h1>Bienvenue sur votre profil</h1>
            {user?.email && <p>Adresse email : {user?.email}</p>}
            <p>{user?.firstName} {user?.lastName}</p>
            <br />
            <br />
            <Button color="error" variant="contained" onClick={() => handleLogout()}>Déconnexion</Button>
            <NavBar/>
        </div>
    );
};

export default Profile;