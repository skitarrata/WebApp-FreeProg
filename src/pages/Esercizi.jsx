import NavBar from "../components/NavBar";
import UploadEx from "../components/UploadEx";
import './Upld.css'

function Esercizi(){
    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
                <UploadEx></UploadEx>
            </NavBar>
        </>
    );
}

export default Esercizi;