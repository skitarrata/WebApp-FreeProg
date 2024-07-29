import './NavBar.css';
import LinkButton from './LinkButton';
import Logout from './Logout';


function NavBar({vis, use, children}){

    return(
        <>
            <div className="nav-bar">
                <img className="immg" src="./src/assets/freeprog.png" alt="FreeProg" width="500" height="400" />
                <LinkButton dis1={use} to={"/HomePage"} name={"butt"}>Home</LinkButton>
                <LinkButton dis1={use} to={"/Corsi"} name={"butt"}>Corsi</LinkButton>
                <LinkButton dis1={use} to={"/Esercizi"} name={"butt"}>Esercizi</LinkButton>
                <LinkButton dis1={use} to={"/Supporto"} name={"butt"}>Supporto</LinkButton>
                <LinkButton dis2={use} view={vis} to={"/SignIn"} name={"butt-log"}>SignIn</LinkButton>
                <LinkButton dis2={use} view={vis} to={"/LogIn"} name={"butt-log"}>LogIn</LinkButton>
                <Logout></Logout>
            </div>
            <div className="base">
                <img className="immg2" src="./src/assets/fp.png" width="250" height="200" />
                {children}
            </div>
        </>
    );
}

export default NavBar;