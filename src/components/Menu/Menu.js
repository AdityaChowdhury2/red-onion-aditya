import React, { useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { foods } from '../../Database/foods';
import { whyChoseUsCard } from '../../Database/whyChoseUs';
import Breakfast from '../Breakfast/Breakfast';
import './menu.css'

const Menu = () => {

    const { breakfast, lunch, dinner } = foods;
    const [menu, setMenu] = useState(breakfast);
    // let isActive = false;
    const handleClick = (e) => {
        if (e.target.name === 'Lunch') {
            // isActive = true
            setMenu(lunch);
        }
        if (e.target.name === 'Dinner') {
            // isActive = true
            setMenu(dinner);
        }
        if (e.target.name === 'Breakfast') {
            // isActive = true
            setMenu(breakfast);
        }
        console.log(menu);
    }


    return (
        <Container>
            <div className="my-5 d-flex justify-content-center">
                <button name="Breakfast" className="customBtn" onClick={handleClick}>Breakfast</button>
                <button name="Lunch" className='customBtn' onClick={handleClick}>Lunch</button>
                <button name="Dinner" className='customBtn' onClick={handleClick}>Dinner</button>
            </div>
            <div >
                < Breakfast menu={menu} />

            </div>
            < div className="my-5 d-flex justify-content-center">
                <Button variant="secondary" disabled>Checkout your Food</Button>
            </div>
            <div style={{ width: '600px' }}>
                <h3>Why you Chose us?</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quaerat qui, amet necessitatibus sint quo temporibus illum neque cupiditate. Maxime?</p>
            </div>
            <div>
                <Row xs={1} md={3} className="g-4 my-3">
                    {whyChoseUsCard.map((card) => (
                        <Col key={card.id}>
                            <Card>
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body className="my-3 d-flex justify-content-center">
                                    <div className='px-3'>
                                        <img src={card.icon} alt="" style={{ width: "40px", display: "block" }} />
                                    </div>
                                    <div >
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>
                                            {card.description}
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container >
    );
};

export default Menu;