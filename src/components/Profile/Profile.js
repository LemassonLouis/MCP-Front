import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getUser } from '../../services/userApiService';

const Profile = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        getUser().then((res) => {
            res.status === 200 && setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Bienvenue sur votre profil</h1>
            {user?.email && <p>Adresse email : {user?.email}</p> }
            <NavBar/>
        </div>
    );
};

export default Profile;