import { ReactNode } from "react"

interface Modal {
    active: boolean;
    closeModal: () => void
    children: ReactNode
}

export const Modal: React.FC<Modal> = ({active, closeModal, children}) => {
    return (
        <div
            id="modal"
            className={active ? "modal active" : 'modal'}
            onClick={closeModal}
            >
            <div className="modal__form" onClick={e => e.stopPropagation()}>
                <button
                    className="modal__close"
                    onClick={closeModal}>X
                </button>
                <div>{ children }</div>
            </div>
        </div>
    )
}