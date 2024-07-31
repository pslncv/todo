import { task } from "../../data/todoList";

interface TaskEdit {
    task: task;
    taskEditName: string;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    save: (id: number, e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TaskEdit:React.FC<TaskEdit> = ({task, taskEditName, change, save}) => {
    return (
    <li className="task__item">
        <form
            className="task__edit"
            action="submit"
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => save(task.id, e)}>
            <input
                id="task__edit-input"
                type="text" 
                value={taskEditName}
                onChange={change} autoFocus/>
        </form>
        <div className="task__actions">
            <button
                className="task__confirm-button"
                onClick={(e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => save(task.id, e)}>
                <img src="./src/img/confirm.png" alt="Завершить редактирование"/>
            </button>
        </div>
    </li>
    );
}