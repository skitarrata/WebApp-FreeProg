import './NavBar';
import { useNavigate } from 'react-router-dom';

function LinkButton({ to, view, dis1, dis2, name, children }){
    const naviget = useNavigate();

    function handleClick(){
        naviget(to);
    }

    return (
        <>
            <button
                className={name} 
                disabled={ dis1 == 1 || dis2 == 0 } 
                style={{ visibility: view }} 
                onClick={handleClick} >{children}
            </button>
        </>
    );
}

export default LinkButton;