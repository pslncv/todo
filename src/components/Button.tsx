import C2 from "./C2";

interface Button {
    title: string,
    openModal: (component: React.ReactNode) => void
}

const Button: React.FC<Button> = ({title, openModal}) => {
    
    return (
        <div className="task__create">
            <button onClick={() => openModal(<C2 />)}>
                <span>{title}</span>
            </button>
        </div>
    );
}
 
export default Button;