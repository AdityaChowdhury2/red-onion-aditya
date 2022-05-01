import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SingleItem from "./components/SingleItem/SingleItem";
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const handleClick = (user) => {
    setNewUser(user);
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Header handleClick={handleClick} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart cart={cart} setCart={setCart} />
            </PrivateRoute>
          } />
          <Route path="/order" element={
            <PrivateRoute>
              <PlaceOrder />
            </PrivateRoute>
          } />

          <Route path="/login" element={<Login newUser={newUser} setNewUser={setNewUser} />} />
        </Routes>
        <Footer />
      </Router>

    </UserContext.Provider>

  );
}

export default App;
