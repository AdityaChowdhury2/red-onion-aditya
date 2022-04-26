import React from 'react';
import { Card, } from 'react-bootstrap';
import './CardItem.css'
const CardItem = ({ food }) => {
    const { name, description, image, price } = food;
    const imageUrl = `images/breakfast/${image}.png`;
    console.log(imageUrl);
    const cardStyle = {
        width: '20rem',
        border: 'none',
        textAlign: 'center',
        padding: '10px 30px'
    }

    return (
        <div className="col-md-4 d-flex justify-content-center my-3">
            <Card style={cardStyle}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title><h5>{name}</h5></Card.Title>
                    <Card.Text >
                        <p>{description}</p>
                    </Card.Text>
                    <Card.Text>
                        <h6>${price}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CardItem;