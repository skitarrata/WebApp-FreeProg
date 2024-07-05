import './NavBar.css';
import LinkButton from './LinkButton';


function NavBar({vis, use, changeBtm, path, children}){

    return(
        <>
            <div className="nav-bar">
                <img className="immg" src="./src/assets/freeprog.png" alt="FreeProg" width="500" height="400" />
                <LinkButton dis1={use} to={"/HomePage"} name={"butt"}>Home</LinkButton>
                <LinkButton dis1={use} to={"/Corsi"} name={"butt"}>Corsi</LinkButton>
                <LinkButton dis1={use} to={"/Esercizi"} name={"butt"}>Esercizi</LinkButton>
                <LinkButton dis1={use} to={"/Supporto"} name={"butt"}>Supporto</LinkButton>
                <LinkButton dis2={use} view={vis} to={"/SignIn"} name={"butt-log"}>SignIn</LinkButton>
                <LinkButton to={path} name={"butt-log"}>{changeBtm}</LinkButton>
            </div>
            <div className="base">
                <img className="immg2" src="./src/assets/fp.png" width="250" height="200" />
                {children}
            </div>
        </>
    );
}

export default NavBar;