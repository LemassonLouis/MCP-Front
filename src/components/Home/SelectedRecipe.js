import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';

const SelectedRecipe = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;
    return (
        <div>
            <ResponsiveHeader title={`Recette ${locationState.name}`}/>
        </div>
    );
};

export default SelectedRecipe;