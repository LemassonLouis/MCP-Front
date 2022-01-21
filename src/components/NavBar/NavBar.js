import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <NavLink 
            to="/"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Recette
            </NavLink>
            <NavLink 
            to="/ingredient"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Ingredient
            </NavLink>
            <NavLink 
            to="/technique"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Technique
            </NavLink>
            <NavLink 
            to="/profile/:id"
            className={({isActive}) => isActive ? "activeLink" : ""}
            >Profil
            </NavLink>
            
        </nav>
    );
};

export default NavBar;