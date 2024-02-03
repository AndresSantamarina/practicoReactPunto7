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
      imagen: "https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg",
    },
    {
      id: 2,
      nombre: "Astryd Vallés",
      titulo: "CMO",
      departamento: "Marketing",
      imagen: "https://png.pngtree.com/png-clipart/20220909/original/pngtree-women-cartoon-avatar-in-flat-style-png-image_8515458.png",
    },
    {
      id: 3,
      nombre: "Shantell Meza",
      titulo: "CFO",
      departamento: "Business",
      imagen: "https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
    },
    {
      id: 4,
      nombre: "Sergio Ocampo",
      titulo: "CTO",
      departamento: "Engineering",
      imagen: "https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg",
    },
    {
      id: 5,
      nombre: "Ares Jiménez",
      titulo: "Art Director",
      departamento: "Marketing",
      imagen: "https://static.vecteezy.com/system/resources/previews/010/967/316/non_2x/avatar-bearded-man-free-vector.jpg",
    },
    {
      id: 6,
      nombre: "Marta Pérez",
      titulo: "Frontend Dev",
      departamento: "Engineering",
      imagen: "https://c0.klipartz.com/pngpicture/193/660/gratis-png-computadora-iconos-mujer-avatar-chica-avatar-thumbnail.png",
    },
  ];

  return (
    <>
      <Container className="text-center mainPage">
        <EmpleadoList arrayEmpleados={empleados}/>
      </Container>
    </>
  );
}

export default App;
