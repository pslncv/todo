import { useState } from "react";
import { useDate } from "./hooks/getDate";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import Empty from "./Tasks/Empty";
import { taskItems } from "../data/todoList";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ITaskItems } from "../models";
import TaskForm from "./Tasks/TaskForm";

const Main = () => {

    const [showModal, setShowModal] = useState<boolean>(false)
    // const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)
    const openModal = () => setShowModal(prev => !prev)
    const closeModal = () => setShowModal(prev => !prev)

    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);

    const createTask = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: ITaskItems = {
            id: Date.now(),
            title: task,
            date: useDate(),
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
                            {taskList.map((task, index) => <Task
                                index={index}
                                task={task}
                                key={task.id}
                                removeTask={removeTask}
                                />)}
                        </TaskList>
                    : <Empty />}
            </main>
            <Modal
                active={showModal}
                closeModal={closeModal}
                children={<TaskForm
                    value={task}
                    change={inputTask}
                    create={createTask}/>}
            />
        </>
    );
}
 
export default Main;