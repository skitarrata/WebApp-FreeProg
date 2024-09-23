import NavBar from "../components/NavBar";
import SupportReq from "../components/SupportReq";

function Supporto(){
    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
                <SupportReq />
            </NavBar>
        </>
    );
}

export default Supporto;