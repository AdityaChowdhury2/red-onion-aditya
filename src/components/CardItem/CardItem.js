import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardItem.css'
const CardItem = ({ food, menu, handleAddFood }) => {

    const { name, description, image, price } = food;
    // console.log(menu);
    // console.log(food);
    // console.log(image);
    const cardStyle = {
        width: '18rem',
        textAlign: 'center',
        padding: '10px 30px'
    };

    return (
        <div className="col-md-4 d-flex justify-content-center my-3" onClick={() => handleAddFood(food)}>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><h5>{name}</h5></Card.Title>
                    <Card.Text style={{ fontSize: '15px', fontWeight: '400' }}>
                        {description}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        ${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CardItem;