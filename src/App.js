import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SingleItem from "./components/SingleItem/SingleItem";
function App() {
  const [cart, setCart] = useState([]);
  return (

    <>
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<SingleItem />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
