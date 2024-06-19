import { useState } from "react";
import Modal from "./components/Modal";
import { todos } from "./data/todoList";

const App = () => {

    const [todoItem, setTodoItem] = useState<string>('')
    const [todoList, setTodoList] = useState<ITodoItem[]>(todos);

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            title: todoItem
        }
        setTodoList(prev => [...prev, newTodo])
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
                    {todoList.map((todo: ITodoItem) => <div key={todo.id}>{todo.title}</div>)}
                </div>
            </main>

            <footer id="footer" className="footer">footer</footer>
        </>
    );
}
 
export default App;