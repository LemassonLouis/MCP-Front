/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:23:49
 * @modify date 2022-05-15 02:24:45
 * @desc [description]
 */
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Header.css';
import {useNavigate} from 'react-router-dom';


const ResponsiveHeader = ({title}) => {

    const navigate = useNavigate();

    return (
        <div className='webapp-header webapp-responsiveHeader'>
            <ArrowBackIcon className='webapp-header_backBtn' onClick={()=>navigate(-1)}/>
            <h2>{title}</h2>
        </div>
    );
};

export default ResponsiveHeader;