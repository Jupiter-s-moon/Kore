import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Product from "../pages/product/Product";
import CartPage from "../pages/cart/CartPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
