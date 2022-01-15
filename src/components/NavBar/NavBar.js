import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <NavLink 
            to="/"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Recette
            </NavLink>
            <NavLink 
            to="/ingredient"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Ingredient
            </NavLink>
            <NavLink 
            to="/technique"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Technique
            </NavLink>
            <NavLink 
            to="/profile/:id"
            className={({isActive}) => {
                return isActive ? "activeLink" : ""
            }}
            >Profil
            </NavLink>
            
        </nav>
    );
};

export default NavBar;