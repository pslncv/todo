import { useState } from "react";
import Edit from "../../img/components/Edit";
import Delete from "../../img/components/Delete";

interface TaskProps {
    task: ITaskItems;
    removeTask: (id: number) => void;
}

const Task = ({task, removeTask}: TaskProps) => {

    const [taskComplete, setTaskComplete] = useState<boolean>(false)

    const checkTask = () => {
        setTaskComplete(prev => !prev)
    }

    return (
        <li className="task__item"
            onClick={checkTask}>
            <input
                type="checkbox" 
                className="task__checkbox" 
                checked={taskComplete}
            />
            <div className="task__body">
                <div className="task__title">{task.title}</div>
                <div className="task__date">{task.date}</div>
            </div>
            <div className="task__actions">
                <button className="task__edit">
                    <Edit color="#ff9f32"/>
                </button>
                <button
                    className="task__delete"
                    onClick={() => removeTask(task.id)}>
                    <Delete color="#ff9f32"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;