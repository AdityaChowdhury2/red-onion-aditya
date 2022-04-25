import React from 'react';
import { Button, Container } from 'react-bootstrap';

import CardItem from '../CardItem/CardItem';
import './menu.css'
const Menu = () => {
    return (
        <Container>
            <div className="mt-5 d-flex justify-content-center">
                <Button variant="light" className='customBtn '>Breakfast</Button>
                <Button variant="light" className='customBtn'>Lunch</Button>
                <Button variant="light" className='customBtn'>Dinner</Button>
            </div>
            <>

            </>
        </Container>
    );
};

export default Menu;