import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { foods } from '../../Database/foods';
import CardItem from '../CardItem/CardItem';
import SingleItem from '../SingleItem/SingleItem';

const Breakfast = ({ menu, setSingleItem, singleItem }) => {
    // console.log(menu);
    // console.log(setSingleItem);
    // console.log(singleItem);

    const handleClick = food => {
        // setSingleItem(food);
        const singleItemState = { ...food, isSingleItem: true };
        setSingleItem(singleItemState);
    }

    return (<>
        {<Row>
            {singleItem.isSingleItem ? <SingleItem singleItem={singleItem} /> : menu.map(food => <CardItem key={food.id} food={food} handleClick={handleClick} setSingleItem={setSingleItem} />)}
        </Row >}
        { }
    </>

    );
};

export default Breakfast;