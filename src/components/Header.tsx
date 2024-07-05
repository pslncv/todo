import C1 from "./C1";

interface Header {
    openModal: (component: React.ReactNode) => void
}

const Header: React.FC<Header> = ({openModal}) => {

    return (
        <header id="header" className="header">
            <div>{"<PSLNCV />"}</div>
            <div onClick={() => openModal(<C1 />)}
                className="modal__open"
                >modal</div>
        </header>
    );
}
 
export default Header;