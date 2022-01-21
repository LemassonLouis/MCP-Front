import React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {orderBy} from "lodash";

const IngredientList = ({ingredients}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState({key: 'ING_name', sort: 'asc'});

    /**
     * In progress !!!!
     * Function that returns the ingredients array as an array filtered by ascending and descending name
     */
    const onSort = () => {
        sort.sort=(sort.sort=='asc'?'desc':'asc');
        let test = orderBy(ingredients, item => item[sort.key].toLowerCase(), [sort.sort]);
        console.log('onSort', test);
    }

    return (
        <>  
            <Link to="/ingredient/add">Ajouter un ingredient</Link>
            <br/>
            <br />
            <p onClick={() => onSort()}>Nom</p>
            <TextField 
                id="outlined-basic" 
                label="Recherche" 
                variant="outlined" 
                type="text" 
                name="search" 
                size='small'
                onChange={((e) => {setSearchTerm(e.target.value)})}
                />
            <br/>
            <div className='card'>
            {

                /*******Search function************/

                ingredients.filter((val) => {
                    if(searchTerm == ''){
                        return val
                    }else if(val.ING_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }

                /*************Render****************/

                }).map((i) =>{
                    return(
                        <Card key={i.id} sx={{ width: 250 }}>
                            <Link 
                            to='/ingredient/:id'
                            state={i}
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
                                            {i.ING_name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    )
                })
            }
            </div>
        </>
    );
};

export default IngredientList;