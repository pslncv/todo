import { createContext, useState } from "react";

interface ModalContext {
    modal: boolean,
    open: () => void,
    close: () => void
}
interface ModalState {
    children: React.ReactNode;
}

export const ModalContext = createContext<ModalContext>({
    modal: false,
    open: () => {},
    close: () => {},
})

export const ModalState = ({children}: ModalState) => {

    const [modal, setModal] = useState<boolean>(false)
    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <ModalContext.Provider value={{modal, open, close}}>
            { children }
        </ModalContext.Provider>        
    )
}
