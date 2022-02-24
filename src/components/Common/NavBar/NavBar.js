import React from "react";
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const {currentUser} = useContext(UserContext);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Recette
      </NavLink>
      <NavLink
        to="/ingredient"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Ingredient
      </NavLink>
      <NavLink
        to="/technique"
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Technique
      </NavLink>
      <NavLink
        /**
         * Pass the id of the connected user
         */
        to={`/profile/${currentUser?.id}`}
        className={({ isActive }) => (isActive ? "activeLink" : "")}
      >
        Profil
      </NavLink>
    </nav>
  );
};

export default NavBar;
