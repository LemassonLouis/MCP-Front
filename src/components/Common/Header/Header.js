import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import {useNavigate} from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);

    return (
        <div className='webapp-header webapp-header_desktop'>
            <h1 className='webapp-header_logo' onClick={()=>navigate('/')}>LOGO</h1>
            {currentUser?.roles[0] && <p>Rôle : {currentUser?.roles[0] === 'ROLE_ADMIN' ? 'Administrateur' : 'Lecteur'}</p>}
        </div>
    );
};

export default Header;