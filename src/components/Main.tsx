import { useState } from "react";
import { taskItems } from "../data/todoList";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import TaskForm from "./Tasks/TaskForm";
import Empty from "./Tasks/Empty";

const Main = () => {

    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);
    // const [taskList, setTaskList] = useState<ITaskItems[]>([]);

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
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
        console.log(taskList);
        
    }

    function handleTaskValue(e: React.ChangeEvent<HTMLInputElement>) {
        setTask(e.target.value)
    }

    return (
        <main id="main" className="main">
            <TaskForm
                value={task} 
                change={handleTaskValue}
                submit={handleSubmit}
            />
            <TaskList>
                {taskList.map((task: ITaskItems) => <Task
                    task={task}
                    key={task.id}
                />) || <Empty />}
            </TaskList>
        </main>
    );
}
 
export default Main;