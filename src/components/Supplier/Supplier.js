/**
 * @author Jérémie Fauveau
 * @create date 2022-05-15 22:07:10
 * @modify date 2022-05-15 22:07:10
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback, useEffect, useState } from "react";
import {
  getAllSuppliers,
  deleteSupplier,
} from "../../services/SupplierService";
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

  const deleteSupplierById = useCallback(
    async (id) => {
      console.log(id);
      await deleteSupplier(id);
      initSuppliers();
    },
    [initSuppliers]
  );

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
        {suppliersState.map((e) => {
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
                      <DeleteIcon onClick={() => deleteSupplierById(e.id)} />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Supplier;
