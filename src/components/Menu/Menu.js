import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

import CardItem from '../CardItem/CardItem';
import './menu.css'
const Menu = () => {
    return (
        <Container>
            <div className="my-5 d-flex justify-content-center">
                <Button variant="light" className='customBtn '>Breakfast</Button>
                <Button variant="light" className='customBtn'>Lunch</Button>
                <Button variant="light" className='customBtn'>Dinner</Button>
            </div>
            <>
                <Breakfast></Breakfast>
            </>
        </Container>
    );
};

export default Menu;