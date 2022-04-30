/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:24:58
 * @modify date 2022-04-27 20:00:56
 * @desc [description]
 */
import React from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {getAllIngredients} from '../../services/ingredientApiService';
import Lottie from "lottie-react";
import cookingLottie from "../../Utils/Lottie/cookingLottie.json";


const IngredientList = ({searchTerm, moreFilter}) => {

    
    const navigate = useNavigate();
    const [lottieState, setLottieState] = useState(false);
    const [ingredientsState, setIngredientsState] = useState([]);

/**
 * TODO :
 * Attention il filtre aussi sur les falses !!!!
 */

    useEffect(() => {
        setLottieState(true);
        getAllIngredients(moreFilter).then((res) => {
            if (res.status === 200) {
                setLottieState(false);
                setIngredientsState(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, [moreFilter]);

    return (
        <>  
            <div className='card'>
            {lottieState && <Lottie className='ingredient-lottie' animationData={cookingLottie}/>}
            {
                /*******Search function************/

                ingredientsState.filter((i) => {
                    if(searchTerm == ''){
                        return i
                    }else if(i.ING_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return i
                    }
                /*************Render****************/

                }).map((i) =>{
                    return(
                        <Card onClick={()=> navigate(`/ingredient/${i.id}`, {state: i})} key={i.id} sx={{ width: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/photos/red-apple-fruit-with-green-leaf-isolated-on-white-picture-id925389178?k=20&m=925389178&s=612x612&w=0&h=6TUJn0mknsO7gPO0j_OKMBhs1ng0LbBKq5OiN_fhVBQ="
                                alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {i.ING_name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
            </div>
        </>
    );
};

export default IngredientList;
