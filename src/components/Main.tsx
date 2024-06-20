import { useState } from "react";
import { taskItems } from "../data/todoList";

const Main = () => {

    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: task
        }
        setTaskList(prev => [...prev, newTask])
        setTask('')
    }

    function handleTaskValue(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    return (
        <main id="main" className="main">
            <div className="task">
                <form
                className="task__form"
                onSubmit={handleSubmit}>    

                    <label
                    htmlFor="task__input"
                    className="task__label"
                    >Что делаем?</label>

                    <input
                    id="task__input"
                    className="task__input"
                    type="text"
                    placeholder="Сделать завтрак..."
                    value={task}
                    onChange={handleTaskValue}
                    />

                </form>
            </div>
            <ul className="task-list">
                {taskList.map((task: ITaskItems) => <li key={task.id}>{task.title}</li>)}
            </ul>
        </main>
    );
}
 
export default Main;