import { ReactNode } from "react"

interface Modal {
    active: boolean;
    modalClose: () => void
    children: ReactNode
}

export const Modal: React.FC<Modal> = ({active, modalClose, children}) => {
    return (
        <div
            id="modal"
            className={active ? "modal active" : 'modal'}
            onClick={modalClose}>
            <div className="modal__form" onClick={e => e.stopPropagation()}>
                <button
                    className="modal__close"
                    onClick={modalClose}>X
                </button>
                <div>{ children }</div>
            </div>
        </div>
    )
}