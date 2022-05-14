/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-05-07 14:10:56
 * @modify date 2022-05-07 15:32:26
 * @desc [description]
 */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {getAllRecipes} from '../../services/recipeApiService';
import {Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Lottie from "lottie-react";
import cookingLottie from "../../Utils/Lottie/cookingLottie.json";
import "./Recipe.css";

const RecipeList = ({searchTerm}) => {

    const navigate = useNavigate();
    const [lottieState, setLottieState] = useState(false);
    const [recipesState, setRecipesState] = useState([]);

    
    useEffect(() => {
        setLottieState(true);
        getAllRecipes().then((res) => {
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
        <div className="card">
            {lottieState && <Lottie className='ingredient-lottie' animationData={cookingLottie}/>}
            {   
                recipesState.filter((r) => {
                    if(searchTerm == ''){
                        return r
                    }else if(r.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return r
                    }
                /*************Render****************/

                }).map((r) => {
                    return(
                        <Card onClick={()=> navigate(`/recipe/${r.id}`, {state: r})} key={r.id} sx={{ width: 250 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=20&m=925389178&s=612x612&w=0&h=6TUJn0mknsO7gPO0j_OKMBhs1ng0LbBKq5OiN_fhVBQ="
                            alt=""
                            />
                            {r.moment && <div className="card_recipe--momentBadge"><MenuBookIcon fontSize="small"/></div>}
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {r.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    )
                })
            }
        </div>
    );
};

export default RecipeList;