import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <Container className="text-center mainPage">
        <EmpleadoList/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
