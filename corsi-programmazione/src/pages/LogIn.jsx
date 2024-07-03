import FormLogIn from "../components/FormLogIn";
import LinkButton from "../components/LinkButton";

function LogIn(){
    return(
        <>
            <div className="container">
                <FormLogIn></FormLogIn>
                <LinkButton to={"/"} name="btn">LogIn</LinkButton>
            </div>
        </>
    );
}

export default LogIn;