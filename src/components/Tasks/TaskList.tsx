const TaskList = ({children}: {children : React.ReactNode}) => {
    return (
        <ul className="task-list">
            {children}
        </ul>
    )
}
 
export default TaskList;