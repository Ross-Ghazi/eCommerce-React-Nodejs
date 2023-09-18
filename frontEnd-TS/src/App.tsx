import "./App.css";
import { HomeScreen } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import OrderScreen from "./pages/OrderScreen";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import ShippingScreen from "./pages/ShippingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
