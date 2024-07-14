import { ReactNode } from "react"

interface Modal {
    closeModal: () => void
    children: ReactNode
}

export const Modal: React.FC<Modal> = ({closeModal, children}) => {
    return (
        <div id="modal" className="modal">
            <div className="modal__form">
                <button
                    className="modal__close"
                    onClick={closeModal}>X
                </button>
                <div>{ children }</div>
            </div>
        </div>
    )
}