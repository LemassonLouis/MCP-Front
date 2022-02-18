import React from 'react';
import NavBar from '../NavBar/NavBar';
import IngredientList from './IngredientList';
import { useState } from 'react';
import {TextField, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
// import {orderBy} from "lodash";

const Ingredient = () => {

    const [searchTerm, setSearchTerm] = useState('');
    // const [sort, setSort] = useState({key: 'ING_name', sort: 'asc'});
    const navigate = useNavigate();

    /** 
     * In progress !!!!
     * Function that returns the ingredients array as an array filtered by ascending and descending name
     */
    // const onSort = () => {
    //     sort.sort=(sort.sort=='asc'?'desc':'asc');
    //     setIngredient(orderBy(ingredients, item => item[sort.key].toLowerCase(), [sort.sort]));
    // }

    return (
        <div>
            <h1>Liste des ingrédients</h1>
            <br />
            <br />
            <Button variant="contained" onClick={() => navigate("/ingredient/add")} >Ajouter</Button>
            <br/>
            <br />
            <div className='filter'>
                {/* <p className="onSort" onClick={() => onSort()}>Nom</p> */}
                <TextField 
                    id="outlined-basic" 
                    label="Recherche" 
                    variant="outlined" 
                    type="text" 
                    name="search" 
                    size='small'
                    onChange={((e) => {setSearchTerm(e.target.value)})}
                    />
            </div>
            <br/>
            <IngredientList searchTerm={searchTerm}/>
            <NavBar/>
        </div>
    );
};

export default Ingredient;