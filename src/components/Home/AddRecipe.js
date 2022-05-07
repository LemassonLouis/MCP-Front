/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-07 15:12:05
 * @modify date 2022-05-07 15:13:24
 * @desc [description]
 */
 import React, { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import ResponsiveHeader from "../Common/Header/ResponsiveHeader";

const AddRecipe = () => {
    const navigate = useNavigate();
    return (
        <>
        <ResponsiveHeader title="Ajouter une recette" />
            
        </>
    );
};

export default AddRecipe;