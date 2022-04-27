import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Cart = () => {
    const { register, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const handleSubmit = (event) => {

        event.preventDefault();
    }
    const onChangeHandler = () => {

    }
    const handleBlur = event => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid && console.log(event.target.value);
        }
    };
    const Select = React.forwardRef(({ name }, ref) => (
        <>
            <select name={name} ref={ref} onBlur={handleBlur}>
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
    return (
        <Container>
            <Row className='d=flex justify-content-between'>
                <Col md={8} style={{ width: '500px' }}>
                    <h5>Edit Delivery details</h5>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder='Email' onBlur={handleBlur} {...register("Email", { required: true })} />
                        {errors.Email && <span className="text-danger">Email id is required</span>}

                        <input placeholder='Phone no' onBlur={handleBlur} {...register("Phone", { required: true })} />
                        {errors.Phone && <span className="text-danger">Phone no is required</span>}

                        <input placeholder='Flat No' onBlur={handleBlur} {...register("FlatNo", { required: true })} />
                        {errors.FlatNo && <span className="text-danger">Flat no is required</span>}

                        <input placeholder='Address' onBlur={handleBlur} {...register("Address", { required: true })} />
                        {errors.Address && <span className="text-danger">Please Enter your address</span>}
                        <br />
                        <br />
                        <Select onBlur={handleBlur} {...register("State", { required: true })} />
                        {errors.State && <span className="text-danger"> Please Select your state</span>}
                        <br />
                        <input type="submit" className='btn btn-danger' />
                    </form>

                </Col>
                <Col md={4} >
                    <p className='mb-1'>From<b> Gulshan Plaza Restaurant</b></p>
                    <p className='mb-1'>Arriving in 20-30 min</p>
                    <p className='mb-1'>205/11 Ghatforhadbeg</p>

                    <Paper className="d-flex justify-content-around p-2 bg-light my-3" elevation={3}>
                        <img src="/images/breakfast/breakfast1.png" alt="" style={{}} />
                        <div className='mt-3'>
                            <h6>Butter Nun</h6>
                            <h4 className='text-danger'>$25</h4>
                            <p className='text-secondary' style={{ fontSize: '10px' }}>Delivery free</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <button style={{ margin: '0 10px', background: 'none', border: 'none', fontSize: '20px' }}>-</button>
                            <input value='04' onChange={onChangeHandler} style={{ width: '30px', border: '1px solid grey', fontSize: '20px', fontWeight: '600', textAlign: 'center' }} />
                            <button style={{ margin: '0 10px', background: 'none', border: 'none', fontSize: '20px' }}>+</button>
                        </div>
                    </Paper>
                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <div className='d-flex justify-content-between'>
                            <p>SubTotal 4 Item</p>
                            <p>$320.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Tax</p>
                            <p>$2.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Delivery fee</p>
                            <p>$5.00</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p style={{ fontSize: '30px' }}>Total</p>
                            <p style={{ fontSize: '30px' }}>$327</p>
                        </div>
                        <Button variant="secondary" disabled style={{ width: '100%' }}>Place Order</Button>

                    </Box>
                </Col>
            </Row>

        </Container>
    );
};

export default Cart;