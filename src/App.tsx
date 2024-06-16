import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {

    const [todoItem, setTodoItem] = useState<string>('')
    const [todoList, setTodoList] = useState<any>([
            "Create To-Do list",
            "Make a coffe"
    ]);

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(todoItem);        
        setTodoList((prev: any) => [...prev, todoItem])
        setTodoItem('')
    }

    function handleTodoValue(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoItem(e.target.value)
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
                        <label
                            htmlFor="todo__input"
                            className="todo__label"
                            >Что делаем?</label>
                        <input
                            id="todo__input"
                            className="todo__input"
                            type="text"
                            placeholder="Сделать завтрак..."
                            value={todoItem}
                            onChange={handleTodoValue}
                            />
                    </form>
                </div>
                <div className="todo-list">
                    {todoList.map((item: any) => <div key={item?.id}>{item}</div>)}
                </div>
            </main>

            <footer id="footer" className="footer">footer</footer>
        </>
    );
}
 
export default App;