import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {

    const [todoList, setTodoList] = useState<any>([])

    function handleSubmit(event: React.KeyboardEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Submit!');
    }

    return (
        <>
            <Modal title="Нашли ошибку?" />

            <header id="header" className="header">
                <div>header</div>
                <div
                    className="modal__open"
                    // onClick={handleModal}
                    >modal</div>
            </header>

            <main id="main" className="main">
                <div className="todo">
                    <form
                        className="todo__form"
                        onSubmit={handleSubmit}>
                        <label className="todo__label">Что делаем?</label>
                        <input
                            className="todo__input"
                            type="text"
                            placeholder="Сделать завтрак..."
                            />
                    </form>
                </div>
            </main>

            <footer id="footer" className="footer">footer</footer>
        </>
    );
}
 
export default App;