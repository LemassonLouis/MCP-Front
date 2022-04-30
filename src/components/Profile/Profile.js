/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:44
 * @modify date 2022-04-25 20:25:45
 * @desc [description]
 */
import React from 'react';
import { useContext } from 'react';
import NavBar from '../Common/NavBar/NavBar';
import UserContext from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../Common/Header/Header';

const Profile = () => {

    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div>
            <Header/>
            <br />
            <br />
            {currentUser?.email && <p>Adresse email : {currentUser?.email}</p>}
            <p>{currentUser?.firstName} {currentUser?.lastName}</p>
            <br />
            <br />
            <div>
                <Button variant="outlined" onClick={() => navigate(`/profile/${currentUser?.id}/edit`)}>Modifier mon profil</Button>
                <Button variant="outlined" onClick={() => navigate(`/profile/${currentUser?.id}/edit/password`)} >Modifier mon mot de passe</Button>
            </div>
            <br />
            <div>
                {currentUser?.roles[0] === 'ROLE_ADMIN' && <Button variant="outlined" onClick={() => navigate("/admin/users")} >Utilisateurs</Button>}
            </div>
            <br />
            <br />
            <Button variant="contained" onClick={() => navigate("/suppliers")} >Fournisseurs</Button>
            <br />
            <br />
            <br />
            <Button color="error" variant="contained" onClick={() => handleLogout()}>Déconnexion</Button>
            <br />
            <br />
            <NavBar />
        </div>
    );
};

export default Profile;