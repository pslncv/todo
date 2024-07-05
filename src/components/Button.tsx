import { useContext } from "react";
import { ModalContext } from "../context/Modal";

const Button = ({title}: {title: string}) => {
    const {open} = useContext(ModalContext)
    return (
        <div className="task__create">
            <button onClick={open}>
                <span>{title}</span>
            </button>
        </div>
    );
}
 
export default Button;