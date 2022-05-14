/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-07 14:04:58
 * @modify date 2022-05-07 15:30:42
 * @desc [description]
 */

import React, {useState} from 'react';
import NavBar from '../Common/NavBar/NavBar';
import Header from '../Common/Header/Header';
import {useNavigate} from 'react-router-dom';
import {TextField, Button} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import RecipeList from './RecipeList';

const Home = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <Header/>
            <div className='webapp-layout'>
                <div className="webapp-layout_top--content">
                    <p onClick={() => navigate("/recipe/add")} >+ Ajouter une recette</p>
                </div>
                <div className='webapp-layout_top--content'>
                    <div className='filter'>
                        <TextField 
                            className='search'
                            id="outlined-basic" 
                            label="Recherche" 
                            variant="outlined" 
                            type="text" 
                            name="search" 
                            size='small'
                            onChange={((e) => {setSearchTerm(e.target.value)})}
                            />
                        <Button 
                            // onClick={() => setShow(true)} 
                            variant="contained">
                            <FilterListIcon />
                            •</Button>
                    </div>
                </div>
                <br />
                <RecipeList searchTerm={searchTerm}/>
            </div>
            <br />
            <br />
            <NavBar/>
        </div>
    );
};

export default Home;