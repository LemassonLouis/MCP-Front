import { CardActionArea, Typography } from "@mui/material";
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
      <div className="card">
        {suppliersState.map((e) => {
          return (
            <Card key={e.id} sx={{ width: 250 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {e.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <NavBar />
    </>
  );
};

export default Supplier;
