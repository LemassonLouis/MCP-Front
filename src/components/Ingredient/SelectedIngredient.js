/**
 * @author Genouel Vincent
 * @email genouel.vincent@gmail.com
 * @create date 2022-05-16 22:49:28
 * @modify date 2022-05-16 22:49:32
 * @desc [description]
 */

/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:25:03
 * @modify date 2022-05-16 22:44:10
 * @desc [description]
 */
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { removeIngredient } from "../../services/ingredientApiService";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import { editIngredient } from "../../services/ingredientApiService";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FooterResponsiveBtn from "../Common/Footer/FooterResponsiveBtn";
import "../Common/Footer/FooterResponsiveBtn.css";
import { Container, FormControl, Grid } from "@mui/material";
import ChooseImage from "../ImagesV2/ChooseImage";

const SelectedIngredient = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [load, setLoad] = useState(false);
  const refCompImage = useRef();
  /**
   * Retrieving data from the state sent by ingredientList with state={i}
   */
  const location = useLocation();
  const locationState = location.state;
  console.log(locationState);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendIngredient = (e) => {
    e.preventDefault();
    setLoad(true);
    let ingredient = {
      name: inputs.name,
      price: parseInt(inputs.price),
      unit: inputs.unit,
      vege: Boolean(inputs.vege),
      allergen: Boolean(inputs.allergen),
    };
    editIngredient(ingredient, locationState.id)
      .then((res) => res.status === 200 && navigate("/ingredient"))
      .catch((err) => console.log(err));
  };

  function sendRemoveIngredient() {
    setLoad(true);
    removeIngredient(locationState.id)
      .then((res) => res.status === 204 && navigate("/ingredient"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <ResponsiveHeader title={`Ingrédient ${locationState.ING_name}`} />
      <Container component="main" maxWidth="sm">
        <FormControl
          sx={{
            marginTop: 4,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={(e) => sendIngredient(e)}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <ChooseImage ref={refCompImage} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ marginBottom: 2, maxWidth: "100%" }}
                  required
                  id="outlined-basic"
                  label="Nom"
                  variant="outlined"
                  type="text"
                  name="name"
                  defaultValue={locationState.ING_name}
                  onInput={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 2, maxWidth: "100%" }}
                  id="outlined-basic"
                  label="Prix"
                  variant="outlined"
                  type="number"
                  name="price"
                  defaultValue={locationState.ING_price}
                  onInput={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ marginTop: 2, marginBottom: 2, maxWidth: "100%" }}
                  id="outline-basic"
                  label="Unité"
                  variant="outlined"
                  type="text"
                  name="unit"
                  defaultValue={locationState.ING_unit}
                  onInput={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="vege"
                      color="primary"
                      name="vege"
                      defaultChecked={locationState.ING_vege}
                      onChange={handleChange}
                    />
                  }
                  label="Végétarien"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allergen"
                      color="primary"
                      defaultChecked={locationState.ING_allergen}
                      name="allergen"
                      onChange={handleChange}
                    />
                  }
                  label="Allergène"
                />
              </Grid>
            </Grid>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <LoadingButton
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  loading={load}
                  color="error"
                  variant="contained"
                  onClick={() => sendRemoveIngredient()}
                  fullWidth
                >
                  <DeleteOutlineOutlinedIcon />
                </LoadingButton>
              </Grid>

              <Grid item xs={12} sm={6}>
                <LoadingButton
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  //   className="webapp-layout__desktop--btn"
                  type="submit"
                  loading={load}
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Modifier
                </LoadingButton>
              </Grid>
            </Grid>
            {/* <FooterResponsiveBtn color="primary" load={load} txt="Modifier" /> */}
          </form>
        </FormControl>
      </Container>
    </div>
  );
};

export default SelectedIngredient;
