import { Typography } from '@mui/material';
import React from 'react';

const Menu = () => {
    const styles = theme => ({
        button: {
            color: 'black',
            cursor: 'pointer',
            '&:hover': {
                color: 'red'
            }
        }
    })
    return (
        <div className="mt-5 d-flex justify-content-center">
            <Typography component='p' className={styles.button}>
                Breakfast
            </Typography>
            <Typography component='p'>
                Lunch
            </Typography>
            <Typography component='p'>
                Dinner
            </Typography>
            {/* <Button className={styles} variant="text">Breakfast</Button>
            <Button className={styles} variant="text">Lunch</Button>
            <Button className={styles} variant="text">Dinner</Button> */}
        </div>
    );
};

export default Menu;