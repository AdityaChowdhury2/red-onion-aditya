import React from 'react';
import { Row } from 'react-bootstrap';
import { foods } from '../../Database/foods';
import CardItem from '../CardItem/CardItem';

const Breakfast = ({ menu }) => {
    console.log(menu);
    return (
        <Row>
            {menu.map(food => <CardItem key={food.id} food={food} />)}
        </Row>
    );
};

export default Breakfast;