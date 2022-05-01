import React from 'react';
import { Container, Typography, } from '@mui/material';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './banner.css';
const Banner = () => {
    const searchFieldStyle = {
        width: '500px',
        height: '100px',
        margin: 'auto'
    }
    const image = "/images/bannerBackground1.png";
    const bannerStyle = {
        height: '500px',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    }
    return (
        <div>
            <div style={bannerStyle}>
                <Container maxWidth='md'>
                    <Typography variant='h3' component='h1'>
                        Best Food waiting for your Belly
                    </Typography>
                    <div style={searchFieldStyle}>
                        <InputGroup className="my-3 searchField-inside">
                            <FormControl
                                className='searchField-inside'
                                placeholder="Search food item"
                                aria-label="Search food item"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="danger" className='searchField-inside'>
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;