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
        <li className="task__item">
            <input
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
                    <Edit color="#c4acff"/>
                </button>
                <button
                    className="task__delete"
                    onClick={() => removeTask(task.id)}>
                    <Delete color="#c4acff"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;