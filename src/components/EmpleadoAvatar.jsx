import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({imagenEmpleado}) => {
    return (
        <Image src={`${imagenEmpleado}`} className="imagenAvatar" fluid rounded />
    );
    
};

export default EmpleadoAvatar;
