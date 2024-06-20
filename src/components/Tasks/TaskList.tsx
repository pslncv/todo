const TaskList = ({children}: {children : React.ReactNode}) => {
    return (
        <ul className="task__list">
            {children}
        </ul>
    )
}
 
export default TaskList;