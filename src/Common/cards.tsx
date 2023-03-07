import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../App.css'
import { Products } from '../Types/types';


export interface cardsProp {
    product: Products,
    children: React.ReactNode
}

function Cards(listOfItems:cardsProp) {
    
    return (

        <Card sx={{ maxWidth: 300 }} className='cardBody'>
            <CardMedia
                sx={{ height: 200 }}
                image={listOfItems.product.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {listOfItems.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {listOfItems.product.description}
                </Typography>
            </CardContent>
            <CardActions>
                {listOfItems.children}
            </CardActions>
        </Card>
    )

}
export default Cards;
