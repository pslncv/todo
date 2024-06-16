import { useState } from "react";

interface IModal {
    title: string,
}

const Modal = (props: IModal) => {

    const [modal, setModal] = useState<boolean>(false)

    function handleModal() {
        setModal(prev => !prev)
    }

    return (
        modal && 
        <div id="modal" className="modal">
            <div className="modal__form">
                <button
                    className="modal__close"
                    onClick={handleModal}>X
                </button>
                <p>{props.title}</p>
            </div>
        </div>
    )
}
 
export default Modal;