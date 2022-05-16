/**
 * @author Genouel Vincent
 * @email genouel.vincent@gmail.com
 * @create date 2022-05-08 16:20:13
 * @modify date 2022-05-16 10:18:38
 * @desc [description]
 */
/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:24:30
 * @modify date 2022-05-15 14:14:37
 * @desc [description]
 */

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicDateRangePicker from "../BasicDateRangePicker/BasicDateRangePicker";
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
import LoadingButton from "@mui/lab/LoadingButton";

import ResponsiveHeader from "../Common/Header/ResponsiveHeader";
import "../Common/Footer/FooterResponsiveBtn.css";
import { postIngredient } from "../../services/ingredientApiService";
import ModalListImage from "../Images/ModalListImages";
import SelectCategory from "./SelectCategory";
import { getAllCategories } from "../../services/CategoryService";
import { styled } from "@mui/system";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AddIngredient = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [load, setLoad] = useState(false);
  const [categorySelectedState, setCategorySelectedState] = useState([]);
  const [categoriesListState, setCategoriesListState] = useState([]);
  const [dense, setDense] = React.useState(false);

  const dateRangerPicker = (data) => {
    setInputs((values) => ({ ...values, season: data }));
  };

  /**
   * Recovery of data entered by the user in the inputs
   */
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  let sendCategories = categorySelectedState.map((e) => {
    return `/api/categories/${e.id}`;
    });

  const removeSelectedCategory = (c) => {
    setCategorySelectedState(categorySelectedState.filter((category) => category.id !== c.id));
  }

  /**
   * Creation of an ingredient object to send to the back
   */
  const sendIngredient = (e) => {
    e.preventDefault();
    setLoad(true);
    let ingredient = {
      name: inputs.name,
      price: parseInt(inputs.price),
      unit: inputs.unit,
      vege: Boolean(inputs.vege),
      allergen: Boolean(inputs.allergen),
      archive: Boolean(inputs.archive),
      categories: sendCategories
    };
    console.log(ingredient);
    postIngredient(ingredient)
      .then((res) => res.status === 201 && navigate(-1))
      .catch(() => setLoad(false));
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

  return (
    <>
      <ResponsiveHeader title="Ajouter un ingrédient" />
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            m: 1,
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={(e) => sendIngredient(e)}>
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
                  fullWidth
                  onInput={handleChange}
                />

                <TextField
                  margin="normal"
                  required
                  id="outlined-basic"
                  label="Prix"
                  variant="outlined"
                  type="number"
                  name="price"
                  fullWidth
                  onInput={handleChange}
                />

                <TextField
                  margin="normal"
                  required
                  id="outline-basic"
                  label="Unité"
                  variant="outlined"
                  type="text"
                  name="unit"
                  fullWidth
                  onInput={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="vege"
                      color="primary"
                      name="vege"
                      onChange={handleChange}
                    />
                  }
                  label="Végétarien"
                />
              </Grid>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allergen"
                      color="primary"
                      name="allergen"
                      onChange={handleChange}
                    />
                  }
                  label="Allergène"
                />
              </Grid>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="archive"
                      color="primary"
                      name="archive"
                      onChange={handleChange}
                    />
                  }
                  label="Archive"
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
                    <ListItem>
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
            <Grid item xs={12} sx={{ mt: 2, mb: 6 }}>
              <BasicDateRangePicker func={dateRangerPicker} />
            </Grid>
            <Grid item xs={12} sx={{ m: 2 }}>
              <LoadingButton
                type="submit"
                loading={load}
                color="primary"
                variant="contained"
                fullWidth
              >
                Valider
              </LoadingButton>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AddIngredient;
