// Импорт семантики
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
    return (
        <>
            <Modal title="Нашли ошибку?" />
            <Header />
            <Main />
            <Footer />
        </>
    );
}
 
export default App;