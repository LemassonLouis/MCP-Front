/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-15 01:02:31
 * @modify date 2022-05-15 01:02:45
 * @desc [description]
 */
import React, {useState} from 'react';
import {
    TextField,
    IconButton,
    Box,
    Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Step.css";

const AddStep = () => {

    const [inputs, setInputs] = useState({});
    const [step, setStep] = useState([{
        order: 1,
        description: "",
    }]);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const removeStep = () => {
        setStep((values) => values.slice(0, -1));
    }

    return (
        <>
            <p className="add-step" onClick={(  
                ) => setStep([...step, {order: step.length+ 1}])}>+ Ajouter une étape</p>
            {step.map((s) =>
            <Container key={s.order} component="main" maxWidth="sm">
                <Box sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <h3>Étape {s.order}</h3>
                    <TextField
                        margin="normal"
                        id="outlined-multiline-static"
                        label="Description"
                        name="description"
                        multiline
                        rows={3}
                        type="text"
                        fullWidth
                        onInput={handleChange}
                    />
                </Box>
            </Container>
            )} 
            {step.length > 0 && <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => removeStep()}/>
            </IconButton>}  
        </>
    );
};

export default AddStep;