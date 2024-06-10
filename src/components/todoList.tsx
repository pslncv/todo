const ToDoList = ({children} : {children: React.ReactNode}) => {
    return (
        <ul className="todo-list">
            { children }
        </ul>
    );
}
 
export default ToDoList;