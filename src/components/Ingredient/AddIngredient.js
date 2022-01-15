import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { postIngredient } from '../../services/ingredientApiService';

const AddIngredient = () => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [unit, setUnit] = useState();
    const [vege, setVege] = useState();
    const [allergen, setAllergen] = useState();
    const [archive, setArchive] = useState();

    const linkedInputName = e => {
        setName(e)
    }
    const linkedInputPrice = e => {
        setPrice(e)
    }
    const linkedInputUnit = e => {
        setUnit(e)
    }
    const linkedInputVege = e => {
        console.log(e);
        setVege(e)
    }
    const linkedInputAllergen = e => {
        setAllergen(e)
    }
    const linkedInputArchive = e => {
        setArchive(e)
    }


    const sendAddIngredient = (e) => {
        e.preventDefault();
        let ingredient = {
            name,
            price: parseInt(price),
            unit,
            vege: Boolean(vege),
            allergen: Boolean(allergen),
            archive: Boolean(archive)
        }
        postIngredient(ingredient).then(
            (res) => res.status === 201 && navigate('/ingredient')
        ).catch((err) => console.log(err))
    }

    return (
        <form onSubmit={e => sendAddIngredient(e)}>
                <label>
                    Nom : 
                    <input type="text" 
                    name='name' 
                    onInput={e => linkedInputName(e.target.value)} 
                    />
                </label>
                <br/>
                <label>
                    Prix : 
                    <input type="number" name='price' 
                    onInput={e => linkedInputPrice(e.target.value)} />
                </label>
                <label>
                    Unité :
                    <input type="text" name='unit' 
                    onInput={e => linkedInputUnit(e.target.value)} />
                </label>
                <br />
                <label>
                    Végétarien :
                    <input type="checkbox" name='unit' 
                    onInput={e => linkedInputVege(e.target.checked)} />
                </label>
                <label>
                    Allergène :
                    <input type="checkbox" name='unit' 
                    onInput={e => linkedInputAllergen(e.target.checked)} />
                </label>
                <label>
                    Archive : 
                    <input type="checkbox" name='unit' 
                    onInput={e => linkedInputArchive(e.target.checked)} />
                </label>
                <br />
                <button>Envoyer</button>
        </form>
    );
};

export default AddIngredient;