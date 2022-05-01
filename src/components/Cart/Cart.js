
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { addOneItemToDb, removeOneItemFromDb } from '../../Database/fakedb';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart, setCart }) => {
    const [loggedInUser] = useContext(UserContext)
    // const { register, formState: { errors } } = useForm();
    const [deliveryDetails, setDeliveryDetails] = useState({
        email: loggedInUser.email,
        phone: '',
        flatNo: '',
        address: '',
        state: '',
        success: false
    });
    // const onSubmit = data => console.log(data);
    const totalPrice = cart.reduce((price, food) => price + food.price * food.quantity, 0);
    const totalQuantity = cart.reduce((quantity, food) => quantity + food.quantity, 0);
    const tax = totalPrice * .18;
    // const totalBeforeTax = 5.00 + totalPrice;
    const totalAfterTax = totalPrice + tax + 5.00;
    const fixingNumber = num => Number(num).toFixed(2);
    const handlePlusButtonClick = (food) => {
        const sameFood = cart.find(pd => pd.key === food.key);
        sameFood.quantity += 1;
        const otherFood = cart.filter(pd => pd.key !== food.key)
        const newCart = [sameFood, ...otherFood];
        setCart(newCart);
        addOneItemToDb(food.key);
    }
    // console.log(cart);
    const handleMinusButtonClick = (food) => {
        const sameFood = cart.find(pd => pd.key === food.key);
        if (sameFood.quantity > 1) {
            sameFood.quantity -= 1;
            const otherFood = cart.filter(pd => pd.key !== food.key)
            const newCart = [sameFood, ...otherFood];
            setCart(newCart);
            removeOneItemFromDb(food.key)
        }
        else {
            alert("Cannot decrease");
        }
    }
    const handleSubmit = (event) => {
        const afterSubmission = { ...deliveryDetails }
        afterSubmission.success = true
        setDeliveryDetails(afterSubmission);
        event.preventDefault();
    }
    const handleBlur = event => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid && console.log(event.target.value);
        }
        if (event.target.name === 'phone') {
            isFieldValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(event.target.value);
        }

        if (isFieldValid) {
            const deliveryInfo = { ...deliveryDetails };
            deliveryInfo[event.target.name] = event.target.value;
            console.log(deliveryInfo);
            setDeliveryDetails(deliveryInfo);
        }
    };
    const Select = React.forwardRef(({ name }, ref) => (
        <>
            <select name={name} ref={ref} value={deliveryDetails.state}
                // onChange={(event) => {
                //     const deliveryInfo = { ...deliveryDetails };
                //     deliveryInfo[event.target.name] = event.target.value;
                //     console.log(deliveryInfo);
                //     setDeliveryDetails(deliveryInfo);
                // }}
                onChange={handleBlur}
            >
                <option value="">Select Your State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
        </>
    ));
    console.log(deliveryDetails)
    return (
        <Container>
            <Row className='d=flex justify-content-between'>
                <Col md={8} style={{ width: '500px' }}>
                    <h5>Edit Delivery details</h5>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder='Email' name='email' defaultValue={deliveryDetails.email} onBlur={handleBlur} />


                        <input placeholder='Phone no' name="phone" defaultValue={deliveryDetails.phone} onBlur={handleBlur} />
                        {/* {errors.Phone && <span className="text-danger">Phone no is required</span>} */}

                        <input placeholder='Flat No' name="flatNo" defaultValue={deliveryDetails.flatNo} onBlur={handleBlur} />
                        {/* {errors.FlatNo && <span className="text-danger">Flat no is required</span>} */}

                        <input placeholder='Address' name='address' defaultValue={deliveryDetails.address} onBlur={handleBlur} />
                        {/* {errors.Address && <span className="text-danger">Please Enter your address</span>} */}
                        <br />
                        <br />
                        <Select onBlur={handleBlur} name='state' />
                        {/* {errors.State && <span className="text-danger"> Please Select your state</span>} */}
                        <br />
                        <input type="submit" className='btn btn-danger' value='Save &#38; Continue' />
                    </form>

                </Col>
                <Col md={4} >
                    <p className='mb-1'>From<b> New Annapurna Restaurant</b></p>
                    <p className='mb-1'>Arriving in 20-30 min</p>
                    <p className='mb-1'>{deliveryDetails.phone}</p>
                    <p className='mb-1'>{deliveryDetails.flatNo} {deliveryDetails.address} {deliveryDetails.state}</p>

                    {cart.map(item =>
                        <CartItem key={item.key} food={item} handlePlusButtonClick={handlePlusButtonClick} handleMinusButtonClick={handleMinusButtonClick} />
                    )}
                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <div className='d-flex justify-content-between'>
                            <p>SubTotal {totalQuantity} Item</p>
                            <p>${fixingNumber(totalPrice)}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Tax</p>
                            <p>${fixingNumber(tax)}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Delivery fee</p>
                            <p>$5.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p style={{ fontSize: '30px' }}>Total</p>
                            <p style={{ fontSize: '30px' }}>${fixingNumber(totalAfterTax)}</p>
                        </div>
                        <Link to='/order'><Button variant="danger" disabled={deliveryDetails.success && cart.length ? false : true} style={{ width: '100%' }}>Place Order</Button></Link>

                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;