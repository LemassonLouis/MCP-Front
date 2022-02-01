import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postIngredient } from "../../services/ingredientApiService";
import BasicDateRangePicker from "../BasicDateRangePicker/BasicDateRangePicker";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";

const AddIngredient = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

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

  /**
   * Creation of an ingredient object to send to the back
   */
  const sendIngredient = (e) => {
    e.preventDefault();
    let ingredient = {
      name: inputs.name,
      price: parseInt(inputs.price),
      unit: inputs.unit,
      vege: Boolean(inputs.vege),
      allergen: Boolean(inputs.allergen),
      archive: Boolean(inputs.archive),
      season: inputs.season,
    };
    console.log(ingredient);
    postIngredient(ingredient)
      .then((res) => res.status === 201 && navigate("/ingredient"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Retour</button>
      <br />
      <br />
      <form onSubmit={(e) => sendIngredient(e)}>
        <TextField
          required
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          type="text"
          name="name"
          onInput={handleChange}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Prix"
          variant="outlined"
          type="number"
          name="price"
          onInput={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Unité"
          variant="outlined"
          type="text"
          name="unit"
          onInput={handleChange}
        />
        <br />
        <br />
        <label>
          Végétarien :
          <input type="checkbox" name="vege" onInput={handleChange} />
        </label>
        <label>
          Allergène :
          <input type="checkbox" name="allergen" onInput={handleChange} />
        </label>
        <label>
          Archive :
          <input type="checkbox" name="archive" onInput={handleChange} />
        </label>
        <br />
        <br />
        <BasicDateRangePicker func={dateRangerPicker} />
        <br />
        <br />
        <button>Envoyer</button>
      </form>
    </>
  );
};

export default AddIngredient;
