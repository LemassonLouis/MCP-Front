/**
 * @author Hofmann Nicolas
 **/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";
import { createSeason } from "../../services/SeasonService";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import FooterResponsiveBtn from "../Common/Footer/FooterResponsiveBtn";
import "../Common/Footer/FooterResponsiveBtn.css";

const AddSeason = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const [load, setLoad] = useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const sendSeason = (e) => {
        e.preventDefault();
        setLoad(true);
        let season = {
            sEAName: inputs.name,
            sEADateDebut: inputs.dateDebut,
            sEADateFin: inputs.dateFin,
        };
        console.log(season);
        createSeason(season)
            .then((res) => res.status === 201 && navigate("/seasons"))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <ResponsiveHeader title="Ajouter une saison" />
            <br />
            <br />
            <form onSubmit={(e) => sendSeason(e)}>
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
                    label="Date Debut"
                    variant="outlined"
                    type="date"
                    name="address"
                    onInput={handleChange}
                />
                <br />
                <br />
                <TextField
                    id="outline-basic"
                    label="Date Fin"
                    variant="outlined"
                    type="date"
                    name="zipCode"
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
export default AddSeason;