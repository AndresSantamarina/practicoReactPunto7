import EmpleadoRow from "./EmpleadoRow";
import { ListGroup } from "react-bootstrap";

const EmpleadoList = ({ arrayEmpleados }) => {
  return (
    <section className="container">
      <ListGroup className="d-flex align-items-center">
        {arrayEmpleados.map((empleado) => (
          <EmpleadoRow
            key={empleado.id}
            nombreEmpleado={empleado.nombre}
            titulo={empleado.titulo}
            departamento={empleado.departamento}
            imagenEmpleado={empleado.imagen}
          />
        ))}
      </ListGroup>
    </section>
  );
};

export default EmpleadoList;
