import { useState } from "react";
import { UseDate } from "./hooks/getDate";
import Task from "./Tasks/Task";
import TaskList from "./Tasks/TaskList";
import Empty from "./Tasks/Empty";
import { taskItems } from "../data/todoList";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { ITaskItems } from "../models";
import TaskForm from "./Tasks/TaskForm";

const Main = () => {

    // Работа с состоянием модального окна
    const [modalShow, setModalShow] = useState<boolean>(false)
    const modalOpen = () => setModalShow(prev => !prev)
    const modalClose = () => setModalShow(prev => !prev)

    // Работа с состоянием задач
    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);
    const taskCreate = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: ITaskItems = {
            id: Date.now(),
            title: task,
            date: UseDate(),
            status: true,
        };
        setTaskList(prev => [...prev, newTask]);
        setTask('');
        modalClose();
    };
    const taskCreateInput = (e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value);
    const taskRemove = (id: number) => setTaskList(prev => prev.filter(task => task.id !== id));
    const taskStatusChange = (id: number, newStatus: boolean) => {
        const target = taskList.find(t => t.id === id);
        if (target) {target.status = newStatus}
        setTaskList([...taskList])
    }

    return (
    <>
        <main id="main" className="main">
            <h2 className="title">Список задач</h2>
            <h3 className="subtitle">Используй своё время эффективно!</h3>
            <Button
                title={"+ Добавить задачу"}
                modalOpen={modalOpen}
            />
            <Button
                title={"Чекнуть стейт"}
                modalOpen={() => {taskList.forEach((t, i) => console.log(i+1, t.status === true ? "V" : " "))}}
            />
            {taskList.length !== 0
                ?   <TaskList>
                        {taskList.map((task, index) => <Task
                            index={index}
                            task={task}
                            key={task.id}
                            taskRemove={taskRemove}
                            taskStatusChange={taskStatusChange}
                            />)}
                    </TaskList>
                : <Empty />}
        </main>
        <Modal
            active={modalShow}
            modalClose={modalClose}
            children={<TaskForm
                value={task}
                change={taskCreateInput}
                create={taskCreate}/>}
        />
    </>
    );
}
 
export default Main;