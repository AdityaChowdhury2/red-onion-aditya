import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PlaceOrder = () => {
    const steps = [
        { label: 'Shop address', description: 'xyz' },
        { label: 'Your Address', description: 'abc' }
    ];
    return (
        <Container>
            <Row >
                <Col className='mb-sm-3' md={6}><img src="/images/ordercomplete.png" alt="" style={{ width: "100%" }} /></Col>
                <Col >
                    <Box sx={{
                        width: '300px',
                        margin: 'auto',
                        backgroundColor: '#d3cece',
                        padding: '20px 25px',
                        borderRadius: '11px'
                    }}>
                        <img src="images/Group 1151.png" alt="" className='mb-2' style={{ width: '40%' }} />
                        <Paper elevation={3} className='mb-2 p-2'>
                            <Stepper orientation="vertical">
                                {steps.map((step) => (
                                    <Step key={step.label}>
                                        <StepLabel>{step.label}</StepLabel>
                                        <StepContent>
                                            <Typography sx={{ fontSize: '12px' }}>{step.description}</Typography>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                        </Paper>
                        <Typography variant='h4' component='p' className='mb-2'>
                            9.30 p.m
                        </Typography>
                        <Typography variant='body1' component='p' className='mb-2'>
                            Estimated delivery time
                        </Typography>
                        <Paper elevation={3} sx={{ display: 'flex', }} className='mb-2'>
                            <img src="images/Group 1152.png" alt="" style={{ width: '75px', padding: '10px' }} />
                            <div style={{ padding: '10px' }}>
                                <Typography variant='h5' component='p'>
                                    Hamim
                                </Typography>
                                <Typography variant='body2' component='p' sx={{ color: 'grey', fontSize: '10px' }}>
                                    Your Raider
                                </Typography>
                            </div>
                        </Paper>
                        <div className="d-flex flex justify-content-center">
                            <button className="btn btn-danger mt-3">Connect</button>
                        </div>

                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;