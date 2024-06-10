import { useState } from "react";

const ToDoInput = () => {

    const [todo, setTodo] = useState<string>('');

    const handleAddTodo = (e:React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(todo);        
    }

    return (
        <form
            action="submit"
            className="form"
            onSubmit={handleFormSubmit}>
            <label htmlFor="" className="form__label">Что будем делать?</label>
            <input
                type="text"
                className="form__input"
                value={todo}
                onChange={handleAddTodo}/>
            <button type="submit">Создать!</button>
        </form>
    );
}
 
export default ToDoInput;