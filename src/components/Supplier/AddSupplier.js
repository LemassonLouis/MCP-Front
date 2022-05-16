/**
 * @author Jérémie Fauveau
 * @create date 2022-05-15 22:07:10
 * @modify date 2022-05-15 22:07:10
 * @desc [description]
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";
import { createSupplier } from "../../services/SupplierService";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FooterResponsiveBtn from "../Common/Footer/FooterResponsiveBtn";
import "../Common/Footer/FooterResponsiveBtn.css";

const AddSupplier = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [load, setLoad] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const sendSupplier = (e) => {
    e.preventDefault();
    setLoad(true);
    let supplier = {
      sUPName: inputs.name,
      sUPAddress: inputs.address,
      sUP_zipCode: inputs.zipCode,
      sUPCity: inputs.city,
      sUPPhone: inputs.phone,
      sUPMail: inputs.mail
    };
    console.log(supplier);
    createSupplier(supplier)
      .then((res) => res.status === 201 && navigate("/suppliers"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ResponsiveHeader title="Ajouter un fournisseur" />
      <br />
      <br />
      <form onSubmit={(e) => sendSupplier(e)}>
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
        <br />
        <TextField
          id="outlined-basic"
          label="Adresse"
          variant="outlined"
          type="text"
          name="address"
          onInput={handleChange}
        />
        <br />
        <br />
        <TextField
          id="outline-basic"
          label="Code postal"
          variant="outlined"
          type="text"
          name="zipCode"
          onInput={handleChange}
        />
        <br />
        <br />
        <TextField
          id="outline-basic"
          label="Ville"
          variant="outlined"
          type="text"
          name="city"
          onInput={handleChange}
        />
        <br />
        <br />
        <TextField
          id="outline-basic"
          label="Téléphone"
          variant="outlined"
          type="text"
          name="phone"
          onInput={handleChange}
        />
        <br />
        <br />
        <TextField
          id="outline-basic"
          label="Mail"
          variant="outlined"
          type="email"
          name="mail"
          onInput={handleChange}
        />
        <br />
        <br />
        <LoadingButton
          className="webapp-layout__desktop--btn"
          type="submit"
          loading={load}
          color="primary"
          variant="contained"
        >
          Envoyer
        </LoadingButton>
        <FooterResponsiveBtn color="primary" load={load} txt="Envoyer" />
      </form>
    </>
  );
};

export default AddSupplier;
