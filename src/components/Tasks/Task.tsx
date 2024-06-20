import { useState } from "react";

const Task = ({task} : {task: ITaskItems}) => {

    const [taskComplete, setTaskComplete] = useState<boolean>(false)

    const handlerCheck = (e: React.ChangeEvent<HTMLInputElement>) => setTaskComplete(e.target.checked)

    return (
        <li className="task__item">
            <input type="checkbox" 
                className="task__status" 
                checked={taskComplete}
                onChange={handlerCheck}
            />
            <div className="task__body">
                <div className="task__title">{task.title}</div>
                <div className="task__date">{task.date}</div>
            </div>
            <div className="task__actions">
                <button className="task__edit">!</button>
                <button className="task__delete">X</button>
            </div>
        </li>
    )
}
 
export default Task;