import { ITaskItems } from "../../models";

interface TaskProps {
    task: ITaskItems;
    index: number,
    taskRemove: (id: number) => void;
    taskStatusChange: (id: number, newStatus: boolean) => void;
}

const Task: React.FC<TaskProps> = ({task, index, taskRemove, taskStatusChange}) => {

    return (
        <li className={task.status ? "task__item complete" : "task__item"}>
            <input
                id={'task__checkbox_' + (index)}
                type="checkbox" 
                className="task__checkbox" 
                checked={task.status}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => taskStatusChange(task.id, e.target.checked)}
            />
            <div className="task__body">
                <div className="task__title">{task.title}</div>
                <div className="task__date">{task.date}</div>
            </div>
            <div className="task__actions">
                <button className="task__edit">
                    <img src="./src/img/edit.png" alt="Редактировать задачу"/>
                </button>
                <button
                    className="task__delete"
                    onClick={() => taskRemove(task.id)}>
                    <img src="./src/img/delete.png" alt="Удалить задачу"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;