import { useState } from "react";
import Edit from "../../img/components/Edit";
import Delete from "../../img/components/Delete";

interface TaskProps {
    task: ITaskItems;
    remove: () => void;
}

const Task = ({task, remove}: TaskProps) => {

    const [taskComplete, setTaskComplete] = useState<boolean>(false)

    const handlerCheck = (e: React.ChangeEvent<HTMLInputElement>) => setTaskComplete(e.target.checked)

    return (
        <li className="task__item">
            <input
                type="checkbox" 
                className="task__checkbox" 
                checked={taskComplete}
                onChange={handlerCheck}
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
                    onClick={remove}>
                    <Delete color="#ff9f32"/>
                </button>
            </div>
        </li>
    )
}
 
export default Task;