/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:03
 * @modify date 2022-04-27 19:00:09
 * @desc [description]
 */
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { removeIngredient } from '../../services/ingredientApiService';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import { editIngredient } from '../../services/ingredientApiService';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../Common/Footer/FooterResponsiveBtn.css'

const SelectedIngredient = () => {

    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [load, setLoad] = useState(false);
    /**
     * Retrieving data from the state sent by ingredientList with state={i}
     */
    const location = useLocation();
    const locationState = location.state;
    
    /**
     * TODO :
     * For the moment you have to trigger the inputs to have a data change otherwise you send null or undefined
     */
    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const sendIngredient = (e) => {
        e.preventDefault();
        setLoad(true);
        console.log(inputs);
        console.log(e);
        let ingredient = {
            name: inputs.name,
            price: parseInt(inputs.price),
            unit: inputs.unit,
            vege: Boolean(inputs.vege),
            allergen: Boolean(inputs.allergen),
        }
        console.log(ingredient);
        editIngredient(ingredient, locationState.id).then(
            (res) => res.status === 200 && navigate('/ingredient')
        ).catch((err) => console.log(err))

    }

    function sendRemoveIngredient(){
        setLoad(true)
        removeIngredient(locationState.id).then(
            (res) => res.status === 204 && navigate('/ingredient')
        ).catch((err) => console.log(err))
    }


    return (
        <div>
            <ResponsiveHeader title={`Ingrédient ${locationState.ING_name}`}/>
            <br />
            <br />
            <form onSubmit={e => sendIngredient(e)}>
                <TextField
                    required
                    id="outlined-basic"
                    label="Nom"
                    variant="outlined"
                    type="text"
                    name="name"
                    defaultValue={locationState.ING_name}
                    onInput={handleChange} />
                <br />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Prix"
                    variant="outlined"
                    type="number"
                    name="price"
                    defaultValue={locationState.ING_price}
                    onInput={handleChange} />
                <TextField
                    id="outline-basic"
                    label="Unité"
                    variant="outlined"
                    type="text"
                    name="unit"
                    defaultValue={locationState.ING_unit}
                    onInput={handleChange} />
                <br />
                <br />
                <label>
                    Végétarien 
                    <input type="checkbox" name='vege'
                        defaultChecked={locationState.ING_vege}
                        onInput={handleChange} />
                </label>
                <label>
                    Allergène 
                    <input type="checkbox" name='allergen'
                        defaultChecked={locationState.ING_allergen}
                        onInput={handleChange} />
                </label>
                <br />
                <br />
                <LoadingButton loading={load} color="error" variant="contained" onClick={() => sendRemoveIngredient()}><DeleteOutlineOutlinedIcon/></LoadingButton>
                <br />
                <LoadingButton className='webapp-layout__desktop--btn' type="submit" loading={load} color="primary" variant="contained">Modifier</LoadingButton>
                <FooterResponsiveBtn color="primary" load={load} txt="Modifier" />
            </form>
        </div>
    );
};

export default SelectedIngredient;