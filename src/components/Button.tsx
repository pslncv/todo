interface Button {
    title: string;
    modalOpen: () => void;
}

export const Button: React.FC<Button> = ({title, modalOpen}) => {

    return (
        <div className="task__create">
            <button onClick={modalOpen}>
                <span>{title}</span>
            </button>
        </div>
    );
}