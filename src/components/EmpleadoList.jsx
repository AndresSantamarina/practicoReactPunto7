import EmpleadoRow from "./EmpleadoRow";
import { ListGroup } from "react-bootstrap";

const EmpleadoList = ({ arrayEmpleados }) => {
  return (
    <ListGroup className="d-flex align-items-center">
      {arrayEmpleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} nombreEmpleado ={empleado.nombre} titulo={empleado.titulo} departamento={empleado.departamento} imagenEmpleado={empleado.imagen}/>
      ))}
    </ListGroup>
  );
};

export default EmpleadoList;
