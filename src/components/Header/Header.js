import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './header.css'

const Header = () => {
    return (
        <Container maxWidth="xl">
            <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
                <Toolbar >
                    <img src="/images/logo2.png" alt="" />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: "flex" }}>
                        <IconButton color="inherit" sx={{ marginRight: "20px" }}>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ marginTop: "10px", marginRight: "20px", fontWeight: "bold" }}
                        >
                            Login
                        </Typography>
                        <Button variant="contained" color="error">
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar >
            </AppBar >
        </Container>
    );
};

export default Header;