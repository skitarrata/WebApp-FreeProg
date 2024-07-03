import FormSignIn from "../components/FormSignIn";
import LinkButton from "../components/LinkButton";

function SignIn(){
    return(
        <>
            <div className="container">
                <FormSignIn></FormSignIn>
                {<LinkButton to={"/LogIn"} name="btn">Avanti</LinkButton>}
            </div>
        </>
    );
}

export default SignIn;