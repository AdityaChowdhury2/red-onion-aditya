import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CardItem = ({ food }) => {
    const { name, description, image, price } = food;
    const imageUrl = `	http://localhost:3000/images/${image}.png`;
    console.log(imageUrl);
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem', border: 'none', textAlign: 'center' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
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