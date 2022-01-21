import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { getAllIngredients} from '../../services/ingredientApiService';
import IngredientList from './IngredientList';

const Ingredient = () => {

    const [ingredients, setIngredients] = useState([]);

    /**
     * Recovery of ingredients data 
     */
    useEffect(() => {
        getAllIngredients().then((res) => {
            if(res.status === 200){
                setIngredients(res.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Liste des ingrédients</h1>
            <IngredientList ingredients={ingredients}/>
            <NavBar/>
        </div>
    );
};

export default Ingredient;