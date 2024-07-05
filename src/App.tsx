// Импорт семантики
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// Импорт состояния и контекста модального окна
import { useContext, useState } from "react";
import { ModalContext } from "./context/Modal";


const App = () => {

    // Выгружжаю из контекста функцию открывания модалки
    // const open = () => setModal(true)
    const {open, close} = useContext(ModalContext)

    // Объявляю внутреннее содержимое модального окна
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)

    // Опускаю вниз по пропсам функции открытия/закрытия модального окна
    const openModal = (component: React.ReactNode) => {
        setModalContent(component);
        open();
    }    
    const closeModal = () => {
        close();
        setModalContent(null);
    }

    return (
        <>
            <Header openModal={openModal}/>
            <Main
                openModal={openModal}
                closeModal={closeModal}
                content={modalContent}
                />
            <Footer />
        </>
    );
}
 
export default App;