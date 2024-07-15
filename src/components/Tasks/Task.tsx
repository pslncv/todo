import { useState } from "react";
import { ITaskItems } from "../../models";

interface TaskProps {
    task: ITaskItems;
    index: number,
    removeTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({task, index, removeTask}) => {

    const [taskComplete, setTaskComplete] = useState<boolean>(false)

    const checkTask = () => {
        setTaskComplete(prev => !prev)
    }

    return (
        <li className={taskComplete ? "task__item complete" : "task__item"}>
            <input
                id={'task__checkbox_' + (index+1)}
                type="checkbox" 
                className="task__checkbox" 
                checked={taskComplete}
                onChange={checkTask}
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
                    onClick={() => removeTask(task.id)}>
                    <img src="./src/img/delete.png" alt="Удалить задачу"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;