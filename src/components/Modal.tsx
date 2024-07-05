import { useContext } from "react";
import { ModalContext } from "../context/Modal";

const Modal = () => {

    const {modal, close} = useContext(ModalContext)

    return (
        modal && 
        <div id="modal" className="modal">
            <div className="modal__form">
                <button
                    className="modal__close"
                    onClick={close}>X
                </button>
                <p></p>
            </div>
        </div>
    )
}

export default Modal;