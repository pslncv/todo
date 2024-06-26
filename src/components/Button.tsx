interface ButtonProps {
    title: string;
    handler: () => void;
}

const Button = ({title, handler}: ButtonProps) => {
    return (
        <div className="task__create">
            <button
                onClick={() => handler()}
            >
                <span>{title}</span>
            </button>
        </div>
    );
}
 
export default Button;