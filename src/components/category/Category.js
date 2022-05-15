/**
 * @author Genouel Vincent
 * @email genouel.vincent@gmail.com
 * @create date 2022-05-08 16:19:17
 * @modify date 2022-05-08 16:19:23
 * @desc [description]
 */

import CategoryForm from "./CategoryForm";
import { useCallback, useEffect, useState } from "react";
import {
  deleteCategory,
  getAllCategories,
} from "../../services/CategoryService";
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "../Common/NavBar/NavBar";

const Category = ({ onClick }) => {
  const [categoriesState, setCategoriesState] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const initCategories = useCallback(async () => {
    try {
      setCategoriesLoading(true);
      const categories = await getAllCategories();
      if (categories.status === 200) {
        setCategoriesLoading(false);
        setCategoriesState(categories.data);
      }
    } catch (err) {
      console.log("ok");
      console.log(err);
    }
  }, []);

  const deleteCategoryById = useCallback(
    async (id) => {
      console.log(id);
      await deleteCategory(id);
      initCategories();
    },
    [initCategories]
  );

  useEffect(() => {
    if (onClick) {
      initCategories();
    }
    initCategories();
  }, [initCategories, onClick]);

  return (
    <>
      <CategoryForm onClick={initCategories} />
      <div className="card">
        {categoriesLoading && <CircularProgress />}
        {categoriesState.map((e) => {
          return (
            <div className="uniqueCard" key={e.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    component="div"
                    variant="h4"
                    color="text.secondary"
                  >
                    {e.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton variant="center">
                    <DeleteIcon onClick={() => deleteCategoryById(e.id)} />
                  </IconButton>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
      <NavBar />
    </>
  );
};

export default Category;
