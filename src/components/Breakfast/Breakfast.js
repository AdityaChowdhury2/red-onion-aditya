import React from 'react';
import { Row } from 'react-bootstrap';
import { foods } from '../../foods';
import CardItem from '../CardItem/CardItem';

const Breakfast = () => {
    // const { breakfast } = breakfast;
    const { breakfast, dinner, lunch } = foods;
    // console.log(breakfast)
    // breakfast.map(food => console.log(food))
    return (
        <Row>
            {
                breakfast.map(food => <CardItem food={food} />)
            }
        </Row>
    );
};

export default Breakfast;