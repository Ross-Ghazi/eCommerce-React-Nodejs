import "./App.css";
import { HomeScreen } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {/* <Route path="/product/:id" element={<ProductScreen />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
