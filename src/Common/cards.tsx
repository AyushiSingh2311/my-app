import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { cardsProp} from '../types/types';
import '../App.css'

function Cards(listOfItems:cardsProp) {

    return (

        <Card sx={{ maxWidth: 300 }} className='cardBody'>
            <CardMedia
                sx={{ height: 200 }}
                image={listOfItems.product.img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {listOfItems.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                {listOfItems.children}
            </CardActions>
        </Card>
    )

}
export default Cards;
