

import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';

const Home = ({ cart, setCart }) => {

    return (
        <>
            <Banner />
            <Menu cart={cart} setCart={setCart} />
        </>
    );
};

export default Home;