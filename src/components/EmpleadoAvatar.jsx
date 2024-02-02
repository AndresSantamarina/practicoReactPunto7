import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({imagenEmpleado}) => {
    return (
        <Image src={`./src/assets/${imagenEmpleado}`} fluid rounded />
    );
    
};

export default EmpleadoAvatar;
