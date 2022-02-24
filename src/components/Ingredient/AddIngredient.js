import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ResponsiveHeader from '../Common/Header/ResponsiveHeader';
import { postIngredient } from '../../services/ingredientApiService';
import BasicDateRangePicker from '../BasicDateRangePicker/BasicDateRangePicker';
import {TextField} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FooterResponsiveBtn from '../Common/Footer/FooterResponsiveBtn';
import '../Common/Footer/FooterResponsiveBtn.css'


const AddIngredient = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [load, setLoad] = useState(false);

    const dateRangerPicker = (data) => {
        setInputs(values => ({...values, 'season' : data}))
    }

  /**
   * Recovery of data entered by the user in the inputs
   */
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

    /**
     * Creation of an ingredient object to send to the back
     */
    const sendIngredient = (e) => {
        e.preventDefault();
        setLoad(true);
        let ingredient = {
            name : inputs.name,
            price: parseInt(inputs.price),
            unit : inputs.unit,
            vege: Boolean(inputs.vege),
            allergen: Boolean(inputs.allergen),
            archive: Boolean(inputs.archive),
            season : inputs.season
        }
        console.log(ingredient);
        postIngredient(ingredient).then(
            (res) => res.status === 201 && navigate('/ingredient')
        ).catch((err) => console.log(err))

    }
    
    return (
        <>
            <ResponsiveHeader title="Ajouter un ingrédient"/>
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
                    onInput={handleChange}  />
                <br/>
                <br />
                <TextField 
                    id="outlined-basic" 
                    label="Prix" 
                    variant="outlined" 
                    type="number" 
                    name="price" 
                    onInput={handleChange}  />
                <TextField 
                    id="outline-basic" 
                    label="Unité" 
                    variant="outlined" 
                    type="text" 
                    name="unit" 
                    onInput={handleChange}  />
                <br />
                <br />
                <label>
                    Végétarien :
                    <input type="checkbox" name='vege' 
                    onInput={handleChange} />
                </label>
                <label>
                    Allergène :
                    <input type="checkbox" name='allergen' 
                    onInput={handleChange} />
                </label>
                <label>
                    Archive : 
                    <input type="checkbox" name='archive' 
                    onInput={handleChange} />
                </label>
                <br />
                <br />
                <BasicDateRangePicker func={dateRangerPicker}/>
                <br />
                <br />
                <LoadingButton className='webapp-layout__desktop--btn' type="submit" loading={load} color="primary" variant="contained">Envoyer</LoadingButton>
                <FooterResponsiveBtn color="primary" load={load} txt="Envoyer"/>
            </form>
            
        </>
    );
};

export default AddIngredient;
