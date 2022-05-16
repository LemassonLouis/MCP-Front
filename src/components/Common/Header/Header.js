/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:23:40
 * @modify date 2022-05-15 02:03:14
 * @desc [description]
 */
import React from 'react';
import './Header.css';
import { useContext } from 'react';
import UserContext from '../../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { getUserRole } from '../../../Common/userRole';

const Header = () => {

    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    return (
        <div className='webapp-header webapp-header_desktop'>
            <img src="/img/logo.svg" className='webapp-header_logo' onClick={() => navigate('/')}></img>
            <p>{getUserRole(currentUser)}</p>
        </div>
    );
};

export default Header;