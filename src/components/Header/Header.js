import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = ({ handleClick }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.displayName || loggedInUser.name;
    return (
        <Container maxWidth="xl" className='mb-3'>
            <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
                <Toolbar >
                    <Link to="/"><img src="/images/logo2.png" alt="" /></Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: "flex" }}>
                        <Link to='/cart'>
                            <IconButton sx={{ marginRight: "20px", color: '#212529' }}>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Link>
                        {loggedInUser.email ?
                            <Link to='/profile' >
                                <Typography
                                    variant="body2"
                                    component="p"
                                    sx={{
                                        marginTop: "8px",
                                        marginRight: "20px",
                                        fontWeight: "bold",
                                        padding: '5px 10px',
                                        borderRadius: "5px",
                                        color: 'red',
                                        transition: (theme) => theme.transitions.create(['background-color'], {
                                            duration: theme.transitions.duration.standard
                                        }),
                                        '&:hover': {
                                            backgroundColor: '#ced4da',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onClick={() => handleClick(false)}
                                >
                                    Welcome {name}
                                </Typography>
                            </Link> :
                            <Link to="/login">
                                <Typography
                                    variant="body2"
                                    component="p"
                                    sx={{
                                        marginTop: "8px",
                                        marginRight: "20px",
                                        fontWeight: "bold",
                                        padding: '5px 10px',
                                        borderRadius: "5px",
                                        color: 'red',
                                        transition: (theme) => theme.transitions.create(['background-color'], {
                                            duration: theme.transitions.duration.standard
                                        }),
                                        '&:hover': {
                                            backgroundColor: '#ced4da',
                                            cursor: 'pointer'
                                        }
                                    }}
                                    onClick={() => handleClick(false)}
                                >
                                    Login
                                </Typography>
                            </Link>
                        }
                        {loggedInUser.email ? <Button variant="contained" color="error" onClick={() => setLoggedInUser({})}>
                            Sign Out
                        </Button> : <Link to='/login'><Button variant="contained" color="error" onClick={() => handleClick(true)}>
                            Sign Up
                        </Button> </Link>}
                    </Box>
                </Toolbar >
            </AppBar >
        </Container >
    );
};

export default Header;