/**
 * @author Jérémie Fauveau
 * @create date 2022-05-16 09:05:15
 * @modify date 2022-05-16 09:05:15
 * @desc [description]
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllRecipes } from "../../services/recipeApiService";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Lottie from "lottie-react";
import cookingLottie from "../../Utils/Lottie/cookingLottie.json";
import "./Technique.css";
import ResponsiveHeader from "../Common/Header/ResponsiveHeader";

const Technique = () => {
  const navigate = useNavigate();
  const [lottieState, setLottieState] = useState(false);
  const [recipesState, setRecipesState] = useState([]);

  useEffect(() => {
    setLottieState(true);
    getAllRecipes(true)
      .then((res) => {
        if (res.status === 200) {
          setLottieState(false);
          setRecipesState(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ResponsiveHeader title={"Liste des techniques"} />
      <div className="card">
        {lottieState && (
          <Lottie className="ingredient-lottie" animationData={cookingLottie} />
        )}
        {recipesState.map((r) => {
          return (
            <Card
              onClick={() => navigate(`/technique/${r.id}`, { state: r })}
              key={r.id}
              sx={{ width: 250 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=20&m=925389178&s=612x612&w=0&h=6TUJn0mknsO7gPO0j_OKMBhs1ng0LbBKq5OiN_fhVBQ="
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {r.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Technique;
