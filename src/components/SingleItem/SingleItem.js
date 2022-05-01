import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SingleItem = ({ singleItem, handleMinusButtonClick, handlePlusButtonClick, cart }) => {
    // console.log(singleItem);
    const { name, description, price, image, key } = singleItem;
    const food = { key, name, description, image, price };
    const sameFood = cart.find(pd => pd.key === key);
    const productTotalPrice = price * sameFood.quantity;
    const fixedPrice = productTotalPrice.toFixed(2);
    // console.log(food);
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col className='d-flex flex-wrap align-content-center'>
                        <div>
                            <h1>{name}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="mt-3 d-flex justify-content-between" style={{ width: '60%' }}>
                            <h1 style={{ fontSize: '45px' }}>${fixedPrice}</h1>
                            <div style={{
                                display: 'block',
                                fontSize: '25px',
                                margin: '6px',
                                border: '1px solid red',
                                borderRadius: '25px',
                                padding: '5px',
                                width: '120px'

                            }} className='d-flex justify-content-around'>
                                <button style={{ background: 'none', border: 'none' }} onClick={() => handleMinusButtonClick(food)}>-</button>
                                <span style={{}}>{sameFood.quantity}</span>
                                <button style={{ background: 'none', border: 'none' }} onClick={() => handlePlusButtonClick(food)}>+</button>
                            </div>
                        </div>
                    </Col>
                    <Col><img src={image} alt="" style={{ width: '100%' }} /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleItem;