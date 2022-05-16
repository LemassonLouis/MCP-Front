/**
 * @author Jérémie Fauveau
 * @create date 2022-05-15 22:07:10
 * @modify date 2022-05-15 22:07:10
 * @desc [description]
 */

import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getAllSuppliers } from "../../services/SupplierService";
import { useNavigate } from "react-router-dom";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";

const Supplier = ({ onClick }) => {
  const [suppliersState, setSuppliersState] = useState([]);
  const [suppliersLoading, setSuppliersLoading] = useState(false);

  const navigate = useNavigate();

  const initSuppliers = useCallback(async () => {
    try {
      setSuppliersLoading(true);
      const suppliers = await getAllSuppliers();
      if (suppliers.status === 200) {
        console.log(suppliers);
        setSuppliersLoading(false);
        setSuppliersState(suppliers.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (onClick) {
      initSuppliers();
    }
    initSuppliers();
  }, [initSuppliers, onClick]);

  return (
    <>
      <ResponsiveHeader title={"Liste des fournisseurs"} /> <br /> <br />
      <Button variant="contained" onClick={() => navigate("/suppliers/add")}>
        Ajouter
      </Button>
      <div className="card">
        {suppliersLoading && <CircularProgress />}
        {suppliersState.map((s) => {
          return (
            <Card
              className="uniqueCardSuppliers"
              key={s.id}
              sx={{ width: 350 }}
              onClick={() => navigate(`/suppliers/${s.id}`, { state: s })}
            >
              <CardContent>
                <Typography component="div" variant="h5" color="text.primary">
                  {s.name}
                </Typography>
                <Typography component="div" variant="h6" color="text.secondary">
                  {s.zip}
                </Typography>
                <Typography component="div" variant="h6" color="text.secondary">
                  {s.city}
                </Typography>
                <Typography component="div" variant="h6" color="text.secondary">
                  {s.phone}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Supplier;
