import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { whyChoseUsCard } from '../../whyChoseUs';
import Breakfast from '../Breakfast/Breakfast';
// import whyChoseUsCard from '../../whyChoseUs';
import CardItem from '../CardItem/CardItem';
import './menu.css'

const Menu = () => {
    return (
        <Container>

            <div className="my-5 d-flex justify-content-center">
                <Button variant="light" className='customBtn'>Breakfast</Button>
                <Button variant="light" className='customBtn'>Lunch</Button>
                <Button variant="light" className='customBtn'>Dinner</Button>
            </div>
            <div >
                <Breakfast></Breakfast>

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
                        <Col>
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
        </Container>
    );
};

export default Menu;