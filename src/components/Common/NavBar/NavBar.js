/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:24:08
 * @modify date 2022-05-07 13:45:49
 * @desc [description]
 */
import React from "react";
import { useContext } from 'react';
import UserContext from '../../../Contexts/UserContext';
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const { currentUser } = useContext(UserContext);

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
