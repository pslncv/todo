import { useContext } from "react";
import { ModalContext } from "../context/Modal";

const Header = () => {
    const {open} = useContext(ModalContext)

    return (
        <header id="header" className="header">
            <div>{"<PSLNCV />"}</div>
            <div onClick={open}
                className="modal__open"
                >modal</div>
        </header>
    );
}
 
export default Header;