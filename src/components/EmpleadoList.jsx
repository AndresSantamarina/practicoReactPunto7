import EmpleadoRow from "./EmpleadoRow";
import { ListGroup } from "react-bootstrap";


const EmpleadoList = () => {
    return (
    <ListGroup className="d-flex align-items-center">
        <EmpleadoRow/>
    </ListGroup>
    );
};

export default EmpleadoList;