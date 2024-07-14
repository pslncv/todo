import { useState } from "react";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import TaskForm from "./Tasks/TaskForm";
import Empty from "./Tasks/Empty";
import { taskItems } from "../data/todoList";
import { Button } from "./Button";
import { Modal } from "./Modal";

const Main = () => {

    const [modal, setModal] = useState<boolean>(false)
    const openModal = () => setModal(prev => !prev)
    const closeModal = () => setModal(prev => !prev)

    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);

    const createTask = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();

        const date = new Date();
        const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1;
        const year = date.getFullYear();

        const newTask: ITaskItems = {
            id: Date.now(),
            title: task,
            date: (hour + ":" + minute + ", " + day + "." + month + "." + year),
            status: true,
        };

        setTaskList(prev => [...prev, newTask]);
        setTask('');
        closeModal() 
    }

    const inputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const removeTask = (id: number) => {
        setTaskList(prev => prev.filter(task => task.id !== id));
    }

    return (
        <>
            <main id="main" className="main">
                <h2 className="title">Список задач</h2>
                <h3 className="subtitle">Используй своё время эффективно!</h3>
                <Button
                    title={"+ Добавить задачу"}
                    openModal={openModal}
                />
                {taskList.length !== 0
                    ?   <TaskList>
                            {taskList.map((task: ITaskItems) => <Task
                                task={task}
                                key={task.id}
                                removeTask={removeTask}/>)}
                        </TaskList>
                    : <Empty />}
            </main>
            {modal && <Modal closeModal={closeModal} children={
                <TaskForm
                    value={task} 
                    change={inputTask}
                    create={createTask}
                />
            }/>}
        </>
    );
}
 
export default Main;