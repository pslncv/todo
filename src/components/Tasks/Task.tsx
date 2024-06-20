const Task = ({task} : {task: ITaskItems}) => {
    return <ul className="task__item">{task.title}</ul>
}
 
export default Task;