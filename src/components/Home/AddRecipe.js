/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-07 15:12:05
 * @modify date 2022-05-15 01:22:30
 * @desc [description]
 */
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";
import ModalListImage from "../Images/ModalListImages";
import SelectCategory from "../Ingredient/SelectCategory";
import SelectedIngredientsForRecipe from "./SelectedIngredientsForRecipe";
import AddStep from "../Step/AddStep";
import { getAllCategories } from "../../services/CategoryService";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    TextField,
    Button,
    Grid,
    Typography,
    List,
    ListItem,
    IconButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Box,
    Container,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {getIngredients} from '../../services/ingredientApiService';

const AddRecipe = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [load, setLoad] = useState(false);
    const [categorySelectedState, setCategorySelectedState] = useState([]);
    const [ingredientsSelectedState, setIngredientsSelectedState] = useState([]);
    const [ingredientsState, setIngredientsState] = useState([]);
    const [categoriesListState, setCategoriesListState] = useState([]);
    const [dense, setDense] = React.useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const removeSelectedCategory = (c) => {
        setCategorySelectedState(categorySelectedState.filter((category) => category.id !== c.id));
    }
    
    const sendRecipe = (e) => {
        e.preventDefault();

    };

    const initCategories = useCallback(async () => {
        const loadingCategories = await getAllCategories();
        setCategoriesListState(loadingCategories.data);
    }, []);

    const Demo = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    useEffect(() => {
        initCategories();
        console.log(categorySelectedState);
    }, [categorySelectedState, initCategories]);

    useEffect(() => {
        getIngredients().then((res) => {
            if (res.status === 200) {
                setIngredientsState(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    return (
        <>
        <ResponsiveHeader title="Ajouter une recette" />
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    <Box component="form" onSubmit={(e) => sendRecipe(e)}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <ModalListImage />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="none"
                                    required
                                    id="outlined-basic"
                                    label="Nom"
                                    name="name"
                                    variant="outlined"
                                    type="text"
                                    sx={{ width: 200 }}
                                    onInput={handleChange}
                                />
                                
                                <TextField
                                    margin="normal"
                                    id="outlined-multiline-static"
                                    label="Commentaire"
                                    name="comment"
                                    multiline
                                    rows={3}
                                    type="text"
                                    fullWidth
                                    onInput={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <br />
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    value="moment"
                                    color="primary"
                                    name="moment"
                                    onChange={handleChange}
                                    />
                                }
                                label="À la carte"
                                />
                            </Grid>
                            <Grid item xs>
                            <TextField
                                margin="normal"
                                id="time"
                                label="Temps de préparation"
                                type="time"
                                name="duration"
                                defaultValue="00:00"
                                onChange={handleChange}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                sx={{ width: 150 }}
                            />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 4, mb: 2 }}>
                            <SelectCategory
                                props={categoriesListState}
                                name="categorySelect"
                                categorySelectedState={categorySelectedState}
                                setCategorySelectedState={setCategorySelectedState}
                            />
                        </Grid>
                        {categorySelectedState.length > 0 && <Grid item xs={12}>
                            <Typography sx={{ mb: 2 }} variant="h6" component="div">
                                Liste des catégories sélectionnées :
                            </Typography>
                        </Grid>}
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Demo>
                                {<List dense={dense}>
                                {categorySelectedState.map((c) => (
                                    <ListItem key={c.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>{c.name}</ListItemText>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={() => removeSelectedCategory(c)}/>
                                    </IconButton>
                                    </ListItem>
                                ))}
                                </List>}
                            </Demo>
                        </Grid>
                    </Box>

                </Box>
            </Container>
            <div className="container-ingredient">
                <p className="add-ingredient" onClick={() => navigate("/ingredient/add")}>+ Ajouter un ingrédient</p>
                <SelectedIngredientsForRecipe ingredients={ingredientsState} ingredientsSelected={ingredientsSelectedState}
                setIngredientsSelected={setIngredientsSelectedState}/>
            </div>
            <AddStep/>
            <br />
            <br />
            <Box sx={{
                maxWidth: 300,
                margin: "auto",
            }}>
                <LoadingButton
                    type="submit"
                    loading={load}
                    color="primary"
                    variant="contained"
                    fullWidth
                >
                    Valider
                </LoadingButton>
            </Box>
            <br />
        </>
    );
};

export default AddRecipe;