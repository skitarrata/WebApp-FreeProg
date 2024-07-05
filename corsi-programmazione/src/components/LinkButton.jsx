import './NavBar';
import { Link } from 'react-router-dom';

function LinkButton({ to, view, dis1, dis2, name, children }){
    return <Link to={to}><button className={name} disabled={ dis1 == 1 || dis2 == 0 } style={{ visibility: view }} >{children}</button></Link>;
}

export default LinkButton;