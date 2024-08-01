import { useState } from "react";
import { task } from "../../data/todoList";

interface TaskProps {
    task: task;
    index: number,
    taskRemove: (id: number) => void;
    taskEditChange: (index: number, title: string) => void;
    taskStatusChange: (id: number, newStatus: boolean) => void;
}

const Task: React.FC<TaskProps> = ({task, index, taskRemove, taskEditChange, taskStatusChange}) => {

    const [tooltipShow, setTooltipShow] = useState<boolean>(false);

    const tooltipOpen = () => {setTooltipShow(true)}
    
    const tooltipClose = () => {setTooltipShow(false)}

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
                <div>
                    <div className="task__title">{task.title}</div>
                    <div className="task__date">{task.date}</div>
                </div>
                <div className="task__tooltip-mark">
                    <span
                        onMouseEnter={tooltipOpen}
                        onMouseLeave={tooltipClose}>i</span>
                    <div className={tooltipShow ? 'task__tooltip active' : 'task__tooltip'}>
                        <div className="task__tooltip-triangle"></div>
                        <div className="task__tooltip-body">
                            <span>Название: {task.title}</span>
                            <span>Время постановки: {task.date}</span>
                            <span>Статус: {task.status === true ? 'Завершена' : 'Активна'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="task__actions">
                <button
                    className="task__edit-button"
                    onClick={() => taskEditChange(index, task.title)}>
                    <img src="./src/img/edit.png" alt="Редактировать задачу"/>
                </button>
                <button
                    className="task__delete-button"
                    onClick={() => taskRemove(task.id)}>
                    <img src="./src/img/delete.png" alt="Удалить задачу"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;