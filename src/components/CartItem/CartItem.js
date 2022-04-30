import React from 'react';
import { Paper } from '@mui/material';

const CartItem = ({ food, handleMinusButtonClick, handlePlusButtonClick }) => {
    const { name, price, quantity, image } = food;
    return (

        <Paper className="d-flex justify-content-around p-2 bg-light my-3" elevation={3}>
            <img src={image} alt="" style={{ width: '120px', padding: '15px' }} />
            <div className='mt-3 ml-2'>
                <h6>{name}</h6>
                <h4 className='text-danger'>${price}</h4>
                <p className='text-secondary' style={{ fontSize: '10px' }}>Delivery free</p>
            </div>
            <div className="d-flex align-items-center">
                <button style={{ margin: '0 10px', background: 'none', border: 'none', fontSize: '20px' }} onClick={() => handleMinusButtonClick(food)}>-</button>
                <span style={{ width: '30px', border: '1px solid grey', fontSize: '20px', fontWeight: '600', textAlign: 'center' }}>{quantity}</span>
                <button style={{ margin: '0 10px', background: 'none', border: 'none', fontSize: '20px' }} onClick={() => handlePlusButtonClick(food)} >+</button>
            </div>
        </Paper>

    );
};

export default CartItem;