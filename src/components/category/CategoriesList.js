import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useCallback, useEffect, useState } from "react";
import { getAllCategories } from "../../Api/CategoryService";
import NavBar from "../NavBar/NavBar";

const CategoriesList = () => {
  const [categoriesState, setCategoriesState] = useState([]);
  const [categoriesLoader, setCategoriesLoader] = useState(false);

  const initCategories = useCallback(() => {
    setCategoriesLoader(true);
    const categoriesLoader = getAllCategories()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setCategoriesState(res.data);
          setCategoriesLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    initCategories();
  }, [initCategories]);

  return (
    <>
      <div className="card">
        {categoriesState.map((e) => {
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

export default CategoriesList;
