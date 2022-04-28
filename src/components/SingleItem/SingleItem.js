import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const SingleItem = ({ singleItem, handleMinusButtonClick, handlePlusButtonClick }) => {
    // console.log(singleItem);
    const { name, description, price, image, key } = singleItem;

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col className='d-flex flex-wrap align-content-center'>
                        <div>
                            <h1>{name}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="mt-3 d-flex justify-content-left">
                            <h1 style={{ fontSize: '45px' }}>${price}</h1>
                            <div style={{
                                display: 'block',
                                fontSize: '25px',
                                margin: '6px 60px',
                                border: '1px solid red',
                                borderRadius: '25px',
                                padding: '5px',

                            }}>
                                <button style={{ margin: '0 10px', background: 'none', border: 'none' }} onClick={() => handleMinusButtonClick(key)}>-</button>
                                <span style={{ margin: '0 10px' }}>1</span>
                                <button style={{ margin: '0 10px', background: 'none', border: 'none' }} onClick={() => handlePlusButtonClick(key)}>+</button>
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