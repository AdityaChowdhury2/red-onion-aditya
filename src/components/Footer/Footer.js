import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', marginTop: '30px' }}>
            <Container className='pt-5 mt-3'>
                <Row >
                    <Col md={6}>
                        <img src='/images/logo2.png' alt="" />
                    </Col>
                    <Col md={3} >
                        <ul style={{ listStyle: 'none' }}>
                            <li><a href="#">About Online Food</a></li>
                            <li><a href="#">Read Our Blog</a></li>
                            <li><a href="#">Sign up to deliver</a></li>
                            <li><a href="#">Add your Restaurant</a></li>
                        </ul>

                    </Col>
                    <Col md={3}>
                        <ul style={{ listStyle: 'none' }}>
                            <li><a href="#">Get Help</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">View all cities</a></li>
                            <li><a href="#">Restaurant near me</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-3 pt-3 text-center">
                    <Col md={6} >
                        <p style={{ color: 'grey', textAlign: 'left' }}>Copyright &copy; 2022 Aditya Chowdhury</p>
                    </Col>
                    <Col md={2}>
                        <a href="#">Privacy Policy</a>
                    </Col>
                    <Col md={2}>
                        <a href="#">Terms and Conditions</a>
                    </Col>
                    <Col md={2}>
                        <a href="#">Pricing</a>
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Footer;