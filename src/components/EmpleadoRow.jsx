import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({
  nombreEmpleado,
  titulo,
  departamento,
  imagenEmpleado,
}) => {
  return (
    <ListGroupItem className="mt-2">
      <section className="container">
        <div className="row">
          <div className="col">
            <EmpleadoAvatar imagenEmpleado={imagenEmpleado} />
          </div>
          <div className="col">
            <h2>{nombreEmpleado}</h2>
            <div className="d-flex justify-content-around">
              <p>{titulo}</p>
              <p className="departamento">{departamento}</p>
            </div>
          </div>
        </div>
      </section>
    </ListGroupItem>
  );
};

export default EmpleadoRow;
