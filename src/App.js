import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SingleItem from "./components/SingleItem/SingleItem";
function App() {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<SingleItem />} />
        </Routes>
        <Footer />
      </Router>

    </>

  );
}

export default App;
