interface Button {
    title: string;
    openModal: () => void;
}

export const Button: React.FC<Button> = ({title, openModal}) => {

    return (
        <div className="task__create">
            <button onClick={openModal}>
                <span>{title}</span>
            </button>
        </div>
    );
}