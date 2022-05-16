/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-15 01:02:56
 * @modify date 2022-05-15 01:02:57
 * @desc [description]
 */
import React from 'react';
import {useEffect, useState}  from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

function getStyles(name, ingredientName, theme) {
    return {
        fontWeight:
        ingredientName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const SelectedIngredientsForRecipe = ({ingredients, ingredientsSelected, setIngredientsSelected}) => {

    const [ingredientName, setIngredientName] = React.useState([]);
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setIngredientName(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setIngredientsSelected(() => [
            ...value,
        ]);
    };

    return (
        <div>
        <FormControl sx={{ m: 2, width: 300 }}>
        <InputLabel>Ingrédients</InputLabel>
            <Select
            label="Ingrédients"
            multiple
            value={ingredientsSelected}
            onChange={handleChange}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((i) => (
                    <Chip key={i} label={i} />
                ))}
                </Box>
            )}
            MenuProps={MenuProps}
            >
            {ingredients.map((i) => (
                <MenuItem
                    key={i.id}
                    value={i.ING_name}
                    style={getStyles(i.ING_name, ingredientName, theme)}
                    >
                    {i.ING_name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    );
}

export default SelectedIngredientsForRecipe;