import NavBar from "../components/NavBar";
import UploadVid from "../components/UploadVid";
import './Upld.css'

function Corsi(){
    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
                <UploadVid></UploadVid>
            </NavBar>
        </>
    );
}

export default Corsi;