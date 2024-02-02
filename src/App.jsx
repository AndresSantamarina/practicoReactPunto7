import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  const empleados = [
    {
      id: 1,
      nombre: "Laya Dueñas",
      titulo: "CEO",
      departamento: "Business",
      imagen: "empleado01.png",
    },
    {
      id: 2,
      nombre: "Astryd Vallés",
      titulo: "CMO",
      departamento: "Marketing",
      imagen: "empleado02.png",
    },
    {
      id: 3,
      nombre: "Shantell Meza",
      titulo: "CFO",
      departamento: "Business",
      imagen: "empleado03.png",
    },
    {
      id: 4,
      nombre: "Sergio Ocampo",
      titulo: "CTO",
      departamento: "Engineering",
      imagen: "empleado04.png",
    },
    {
      id: 5,
      nombre: "Ares Jiménez",
      titulo: "Art Director",
      departamento: "Marketing",
      imagen: "empleado05.png",
    },
    {
      id: 6,
      nombre: "Marta Pérez",
      titulo: "Frontend Dev",
      departamento: "Engineering",
      imagen: "empleado06.png",
    },
  ];

  return (
    <>
      <Container className="text-center mainPage">
        <EmpleadoList arrayEmpleados={empleados}/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
