import { useContext } from "react";
import { ModalContext } from "../context/Modal";

interface Modal {
    children: React.ReactNode,
    closeModal: (parameter: null) => void
}

const Modal: React.FC<Modal> = ({children, closeModal}) => {
    
    const {modal} = useContext(ModalContext)

    return (
        modal && 
        <div id="modal" className="modal">
            <div className="modal__form">
                <button
                    className="modal__close"
                    onClick={() => closeModal(null)}>X
                </button>
                <p>{ children }</p>
            </div>
        </div>
    )
}

export default Modal;