interface TaskFormProps {
    value: string,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void,
    submit: (e: React.KeyboardEvent<HTMLFormElement>) => void
}

const TaskForm = ({value, change, submit}: TaskFormProps) => {
    return (
        <form className="task__form" onSubmit={submit}>
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