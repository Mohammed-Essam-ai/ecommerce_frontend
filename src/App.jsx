import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="products/" element={<Products />} />
        <Route path="products/product/:id" element={<Product />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/register" element={<Register />} />
        <Route path="user/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
