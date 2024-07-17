import { useState } from "react"
import { UseDate } from "./hooks/getDate"
import Task from "./Tasks/Task"
import TaskList from "./Tasks/TaskList"
import Empty from "./Tasks/Empty"
import { taskItems } from "../data/todoList"
import { Modal } from "./Modal"
import { ITaskItems } from "../models"
import TaskForm from "./Tasks/TaskForm"

const Main = () => {

    // Работа с состоянием модального окна
    const [modalShow, setModalShow] = useState<boolean>(false)
    const modalOpen = () => setModalShow(prev => !prev)
    const modalClose = () => setModalShow(prev => !prev)
    const [modalError, setModalerror] = useState<boolean>(false)
    const [modalErrorText, setModalerrorText] = useState<string>('')

    // Работа с состоянием задач
    const [task, setTask] = useState<string>('');
    const [taskList, setTaskList] = useState<ITaskItems[]>(taskItems);
    const taskCreate = (e: React.KeyboardEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (task.trim().length === 0) {
            setModalerror(true)
            setModalerrorText('Поле пустое')
            return
        } else {
        const newTask: ITaskItems = {
            id: Date.now(),
            title: task.trim(),
            date: UseDate(),
            status: false
        }
        setTaskList(prev => [...prev, newTask])
        setTask('')
        setModalerror(false)
        setModalerrorText('')
        modalClose()
        }
    }
    const taskCreateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
        if ((task.trim().length > 0) || (e.target.value.trim().length > 0)) {setModalerror(false)}
    }
    const taskRemove = (id: number) => setTaskList(prev => prev.filter(task => task.id !== id))
    const taskStatusChange = (id: number, newStatus: boolean) => {
        const target = taskList.find(t => t.id === id)
        if (target) {target.status = newStatus}
        setTaskList([...taskList])
    }

    const checkState = () => {
        console.clear()
        taskList.forEach((t, i) => console.log(i+1, t.status === true ? "V" : " "))
        console.log(modalError === false ? 'Ошибки нет' : 'Ошибка есть')
    }

    return (
    <>
        <main id="main" className="main">
            <h2 className="title">Список задач</h2>
            <h3 className="subtitle">Используй своё время эффективно!</h3> 
            {/* //!  Раскоментить */}
            {/* <div className="task__create">
                <button onClick={modalOpen}>
                    <span>+ Добавить задачу</span>
                </button>
            </div>             */}
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div className="task__create">
                    <button onClick={modalOpen}>
                        <span>+ Добавить задачу</span>
                    </button>
                </div>
                <div className="task__create">
                    <button onClick={checkState}>
                        <span>Чекнуть стейт</span>
                    </button>
                </div>
            </div>
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
                create={taskCreate}
                error={modalError}
                errorText={modalErrorText}/>
            }
        />
    </>
    );
}
 
export default Main;