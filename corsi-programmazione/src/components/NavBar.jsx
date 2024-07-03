//import { useState } from 'react';
import './NavBar.css';
import LinkButton from './LinkButton';


function NavBar({children}){
    /* const [validLogin, setValidLogin ] = useState(false);
    const [visible, setVisible ] = useState("visible");
    const [changeBtm, setChangeBtm ] = useState("SignIn"); */

    return(
        <>
            <div className="nav-bar">
                <img className="immg" src="./src/assets/freeprog.png" alt="FreeProg" width="500" height="400" />
                <LinkButton to={"/"} name={"butt"}>Home</LinkButton>
                <LinkButton to={"/Corsi"} name={"butt"}>Corsi</LinkButton>
                <LinkButton to={"/Esercizi"} name={"butt"}>Esercizi</LinkButton>
                <LinkButton to={"/Supporto"} name={"butt"}>Supporto</LinkButton>
                <LinkButton to={"/SignIn"} name={"butt-log"}>SignIn</LinkButton>
                <LinkButton to={"/LogIn"} name={"butt-log"}>LogIn</LinkButton>
                {/* 
                <button 
                    className="butt-log"
                    style={{ visibility: visible }}>LogIn</button>
                <button className="butt-log">{changeBtm}</button> */}
            </div>
            <div className="base">
                <img className="immg2" src="./src/assets/fp.png" width="250" height="200" />
                {children}
            </div>
        </>
    );
}

export default NavBar;