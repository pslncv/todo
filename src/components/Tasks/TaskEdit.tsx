import { task } from "../../data/todoList";

interface TaskEdit {
    task: task;
    taskSaveEdit: (id: number, e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TaskEdit:React.FC<TaskEdit> = ({task, taskSaveEdit}) => {
    return (
    <li className="task__item">
        <form
            action="submit"
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => taskSaveEdit(task.id, e)}>
            <input
                id="task__edit-input"
                type="text" 
                value={task.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {console.log('soon...' , e.target.value)
                }} autoFocus/>
        </form>
        <div className="task__actions">
            <button
                className="task__confirm"
                onClick={(e:React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => taskSaveEdit(task.id, e)}>
                <img src="./src/img/confirm.png" alt="Завершить редактирование"/>
            </button>
        </div>
    </li>
    );
}