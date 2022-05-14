/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:24:52
 * @modify date 2022-05-07 14:00:07
 * @desc [description]
 */
import React from 'react';
import NavBar from '../Common/NavBar/NavBar';
import IngredientList from './IngredientList';
import { useState } from 'react';
import {TextField, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Header from '../Common/Header/Header';
import ModalFilters from '../Common/Filters/ModalFilters';
import FilterListIcon from '@mui/icons-material/FilterList';
// import {orderBy} from "lodash";

const Ingredient = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filtersLength, setFiltersLength] = useState(0);
    const [moreFilter, setMoreFilters] = useState({});
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleShow = () => setShow(false);

    const childToParentFiltersLength = (data) => {
        setFiltersLength(data);
    }

    const childToParentMoreFilter = (data) => {
        setMoreFilters(data);
    }
    
    return (
        <div>
            <Header/>
            <div className='webapp-layout'>
                <div className="webapp-layout_top--content">
                    <p onClick={() => navigate("/ingredient/add")} >+ Ajouter un ingrédient</p>
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
                        <Button onClick={() => setShow(true)} variant="contained">
                            <FilterListIcon />
                            • {filtersLength}</Button>
                    </div>
                </div>
                <br/>
                <IngredientList moreFilter={moreFilter} searchTerm={searchTerm}/>
            </div>
            <NavBar/>
            <ModalFilters childToParentFiltersLength={childToParentFiltersLength} childToParentMoreFilter={childToParentMoreFilter} show={show} func={handleShow}/>
        </div>
    );
};

export default Ingredient;