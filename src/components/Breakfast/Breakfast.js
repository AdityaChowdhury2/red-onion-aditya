import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addOneItemToDb, addToDb, getStoredCart, removeOneItemFromDb } from '../../Database/fakedb';
import { foods } from '../../Database/foods';
import CardItem from '../CardItem/CardItem';
import SingleItem from '../SingleItem/SingleItem';

const Breakfast = ({ menu, setSingleItem, singleItem }) => {
    const [cart, setCart] = useState([]);
    const { breakfast, lunch, dinner } = foods;
    const allMenu = [...breakfast, ...lunch, ...dinner];
    // console.log(allMenu);
    useEffect(() => {
        const savedCart = getStoredCart();
        const cartProductsKey = Object.keys(savedCart);
        const previousCart = cartProductsKey.map(existingKey => {
            // console.log(existingKey);
            const previousProduct = allMenu.find(product => product.key === existingKey);
            previousProduct.quantity = savedCart[existingKey];
            // console.log(previousProduct);
            return previousProduct;
        })
        // console.log(previousCart);
        setCart(previousCart);
        console.log(cart);
    }, [])

    const handleAddFood = food => {
        // setSingleItem(food);
        const singleItemState = { ...food, isSingleItem: true };
        setSingleItem(singleItemState);
        const toBeAddedKey = (food.key);
        const sameProduct = cart.find(food => food.key === toBeAddedKey);
        let count = 1;
        let newCart = []
        if (sameProduct) {
            // count = food.quantity + 1;
            food.quantity = count;
            const otherProduct = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [sameProduct, ...otherProduct];
        }
        else {
            // food.quantity = count;
            newCart = [...cart, food];
        }
        setCart(newCart);
        addToDb(food.key);
    }
    // console.log(cart);
    const handleMinusButtonClick = (id) => {
        removeOneItemFromDb(id)
    }
    const handlePlusButtonClick = (id) => {
        addOneItemToDb(id);
    }
    console.log(cart);
    return (<>
        {<Row>
            {singleItem.isSingleItem ? <SingleItem singleItem={singleItem} handlePlusButtonClick={handlePlusButtonClick} handleMinusButtonClick={handleMinusButtonClick} /> : menu.map(food => <CardItem key={food.key} food={food} setSingleItem={setSingleItem} handleAddFood={() => handleAddFood(food)} />)}
        </Row >}
        { }
    </>

    );
};

export default Breakfast;