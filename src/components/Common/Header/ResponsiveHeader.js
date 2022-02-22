import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Header.css';
import {useNavigate} from 'react-router-dom';


const ResponsiveHeader = ({title}) => {

    const navigate = useNavigate();

    return (
        <div className='webapp-header'>
            <ArrowBackIcon className='webapp-header_backBtn' onClick={()=>navigate(-1)}/>
            <h2>{title}</h2>
        </div>
    );
};

export default ResponsiveHeader;