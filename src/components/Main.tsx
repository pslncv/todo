import { useState } from "react";
import { taskItems } from "../data/todoList";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import TaskForm from "./Tasks/TaskForm";

const Main = () => {

    const [task, setTask] = useState<string>('')
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);

    function handleSubmit(e: React.KeyboardEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: ITaskItems = {
            id: Date.now(),
            key: Date.now(),
            title: task,
            date: (Date.now()).toString(),
            status: "active,"
        }
        setTaskList(prev => [...prev, newTask])
        setTask('')
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
                />)}
            </TaskList>
        </main>
    );
}
 
export default Main;