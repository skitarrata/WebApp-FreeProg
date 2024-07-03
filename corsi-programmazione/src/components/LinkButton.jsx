import './NavBar';
import { Link } from 'react-router-dom';

function LinkButton({ to, name, children }){
    return <Link to={to}><button className={name} >{children}</button></Link>;
}

export default LinkButton;