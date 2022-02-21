import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useCallback, useEffect, useState } from "react";
import { getAllSuppliers } from "../../services/supplierApiService";
import NavBar from "../NavBar/NavBar";

const Supplier = () => {
  const [suppliersState, setSuppliersState] = useState([]);
  const [suppliersLoader, setSuppliersLoader] = useState(false);

  const initSuppliers = useCallback(() => {
    setSuppliersLoader(true);
    const suppliersLoader = getAllSuppliers()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setSuppliersState(res.data);
          setSuppliersLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    initSuppliers();
  }, [initSuppliers]);

  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
        </CardContent>
      </Card>
      <NavBar />
    </>
  );
};

export default Supplier;
