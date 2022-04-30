
import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import SingleItem from '../SingleItem/SingleItem';

const Home = ({ cart, setCart }) => {

    return (
        <>
            <Banner />
            <Menu cart={cart} setCart={setCart} />
        </>
    );
};

export default Home;