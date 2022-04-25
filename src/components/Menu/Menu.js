import React from 'react';
import { Button } from 'react-bootstrap';
import './menu.css'
const Menu = () => {
    return (
        <div className="mt-5 d-flex justify-content-center">
            <Button variant="light" className='customBtn customBtn-active'>Breakfast</Button>
            <Button variant="light" className='customBtn'>Lunch</Button>
            <Button variant="light" className='customBtn'>Dinner</Button>
            {/* <Button className={styles} variant="text">Breakfast</Button>
            <Button className={styles} variant="text">Lunch</Button>
            <Button className={styles} variant="text">Dinner</Button> */}
        </div>
    );
};

export default Menu;