/**
 * @author Jérémie Fauveau
 * @create date 2022-05-16 09:05:15
 * @modify date 2022-05-16 09:05:15
 * @desc [description]
 */

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header/Header";
import NavBar from "../Common/NavBar/NavBar";
import DeleteIcon from "@mui/icons-material/Delete";

const Technique = ({ onClick }) => {
  const [techniquesState, setTechniquesState] = useState([]);
  const [techniquesLoading, setTechniquesLoading] = useState(false);

  const navigate = useNavigate();

  // const initTechniques = useCallback(async () => {
  //   try {
  //     setTechniquesLoading(true);
  //     const techniques = await getAllTechniques();
  //     if (techniques.status === 200) {
  //       console.log(techniques);
  //       setTechniquesLoading(false);
  //       setTechniquesState(techniques.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // const deleteTechniqueById = useCallback(
  //   async (id) => {
  //     console.log(id);
  //     await deleteTechnique(id);
  //     initTechniques();
  //   },
  //   [initTechniques]
  // );

  // useEffect(() => {
  //   if (onClick) {
  //     initTechniques();
  //   }
  //   initTechniques();
  // }, [initTechniques, onClick]);

  return (
    <div>
      <Header />
      <br />
      <Button variant="contained" onClick={() => navigate("/technique/add")}>
        Ajouter
      </Button>
      <div className="card">
        {techniquesLoading && <CircularProgress />}
        {techniquesState.map((e) => {
          return (
            <>
              <div className="uniqueCard" key={e.name}>
                <Card sx={{ maxWidth: 350 }}>
                  <CardContent>
                    <Typography
                      component="div"
                      variant="h5"
                      color="text.primary"
                    >
                      {e.SUP_name}
                    </Typography>
                    <Typography
                      component="div"
                      variant="h6"
                      color="text.secondary"
                    >
                      {e.SUP_city}
                    </Typography>
                    <Typography
                      component="div"
                      variant="h6"
                      color="text.secondary"
                    >
                      {e.SUP_zipCode}
                    </Typography>
                    <Typography
                      component="div"
                      variant="h6"
                      color="text.secondary"
                    >
                      {e.SUP_phone}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton variant="center">
                      <DeleteIcon /* onClick={() => deleteTechniqueById(e.id)} */
                      />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </>
          );
        })}
      </div>
      <NavBar />
    </div>
  );
};

export default Technique;
