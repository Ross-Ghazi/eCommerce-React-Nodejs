import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
