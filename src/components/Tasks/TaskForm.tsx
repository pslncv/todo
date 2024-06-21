interface TaskFormProps {
    value: string,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void,
    create: (e: React.KeyboardEvent<HTMLFormElement>) => void
}

const TaskForm = ({value, change, create}: TaskFormProps) => {
    return (
        <form className="task__form" onSubmit={create}>
            <label htmlFor="task__input" className="task__label">Что делаем?</label>
            <input
                id="task__input"
                className="task__input"
                type="text"
                placeholder="Сделать завтрак..."
                value={value}
                onChange={change}
            />
        </form>
    );
}
 
export default TaskForm;