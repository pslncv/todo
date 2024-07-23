import { task } from "../../data/todoList";

interface TaskEdit {
    task: task;
    setTaskEdit: (parameter: null) => void;
}

export const TaskEdit:React.FC<TaskEdit> = ({task, setTaskEdit}) => {
    return (
    <li className="task__item">
        <input 
            type="text" 
            value={task.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {console.log(e.target.value)}}/>
        <div className="task__actions">
            <button
                className="task__confirm"
                onClick={() => setTaskEdit(null)}>
                <img src="./src/img/confirm.png" alt="Завершить редактирование"/>
            </button>
        </div>
    </li>
    );
}