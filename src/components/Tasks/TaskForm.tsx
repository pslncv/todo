interface TaskFormProps {
    value: string;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    create: (e: React.KeyboardEvent<HTMLFormElement>) => void;
    error: boolean
    errorText: string;
}

const TaskForm = ({value, change, create, error, errorText}: TaskFormProps) => {
    return (
        <form className="task__form" onSubmit={create}>
            <label htmlFor="task__input" className="task__label">Что делаем?</label>
            <input
                style={error ? {border: 'red 4px solid'} : {}}
                id="task__input"
                className="task__input"
                type="text"
                placeholder="Сделать завтрак..."
                value={value}
                onChange={change}
                />
                {error ? <span className="task__error">{errorText}</span> : null}
            <button type="submit">Отправить!</button>
        </form>
    );
}
 
export default TaskForm;