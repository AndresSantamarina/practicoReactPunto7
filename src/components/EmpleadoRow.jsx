import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <ListGroupItem className="mt-2">
      <section className="container">
        <div className="row">
          <div className="col">
            <EmpleadoAvatar />
          </div>
          <div className="col">
            <h2>Nombre</h2>
            <p>Título</p>
            <p>Departamento</p>
          </div>
        </div>
      </section>
    </ListGroupItem>
  );
};

export default EmpleadoRow;
