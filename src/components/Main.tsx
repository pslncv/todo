import { useState } from "react";
import { taskItems } from "../data/todoList";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import TaskForm from "./Tasks/TaskForm";
import Empty from "./Tasks/Empty";

const Main = () => {

    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);

    function submitForm(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();

        const date = new Date();
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1
        const year = date.getFullYear()

        const newTask: ITaskItems = {
            id: Date.now(),
            key: Date.now(),
            title: task,
            date: (hour + ":" + minute + ", " + day + "." + month + "." + year),
            status: true,
        }

        setTaskList(prev => [...prev, newTask]);
        setTask('');     
    }

    function createTask(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    const deleteTask = (id: number): void => {
        setTaskList(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return (
        <main id="main" className="main">
            <TaskForm
                value={task} 
                change={createTask}
                create={submitForm}
            />
            {taskList.length !== 0
                ?   <TaskList>
                        {taskList.map((task: ITaskItems) => <Task
                            task={task}
                            key={task.id}
                            remove={() => deleteTask(task.id)}/>)}
                    </TaskList>
                : <Empty />}
        </main>
    );
}
 
export default Main;