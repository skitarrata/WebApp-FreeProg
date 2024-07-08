import { useEffect, useState } from "react";
import { useAuth } from "../Authenticate/AuthContext";

function FormLogIn(){
    //const naviget = useNavigate();
    const { login } = useAuth();
    const [user, setUser] = useState("");;
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState({
        us: false,
        pas: false,
    });

    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 6000);
    }, [msg]);

    /* const handleSubmit = async (e) => {
        e.preventDefault();
        // Simula una chiamata API di login
        // Dovresti sostituire questo con la tua chiamata API reale
        const token = 'sample_token'; // Questo dovrebbe essere restituito dalla tua API
        login(token);
      }; */

    function handleInputChange(e, funct1, funct2, str){
        funct1("");
        funct2(e.target.value);
        if (e.target.value === ""){
            funct1("Il campo " + str + " è vuoto");
        }
    }

    function checkUser(){
        for(var i = 0; i < user.length; i++){
            if((user[i] < "0" || user[i] > "9") && (user[i] < "a" || user[i] > "z") && (user[i] < "A" || user[i] > "Z")){
                setError("Carattere non concesso");
                setErr({...err, us: false});
                return ;
            }
        }
        setErr({...err, us: true});
        return;
    }

    function checkPassword(){
        for(var i = 0; i < pass.length; i++){
            if((pass[i] < "!" || pass[i] === "\"" || pass[i] === "\'" || pass[i] === "<" || pass[i] === ">" || pass[i] === "|" || pass[i] > "~")){
                setError("Carattere non concesso");
                setErr({...err, pas: false});
                return ;
            }
        }
        setErr({...err, pas: true});
        return;
    }

    function handleLogin(){
        if(user !== "" && pass !== ""){
            if (err.us !== false && err.pas !== false){
                var url = "http://localhost/react/login.php"
                var headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                };
                var Data = {
                    user: user,
                    pass: pass
                }
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(Data)
                }).then((response) => response.json())
                .then((response) => {
                    if (response[0].result === "Password non valida!" || response[0].result === "Username non valido!"){
                        setError(response[0].result);
                    }
                    else{
                        setMsg(response[0].result);
                        setTimeout(function(){
                            const token = 'sample_token'; // Questo dovrebbe essere restituito dalla tua API
                            login(token);
                        }, 3000);
                    }
                }).catch((m) => {
                    setError(m);
                    console.log(m);
                });
                setUser("");
                setPass("");
            }
            else{
                setError("Ci sono Errori nel form");
            }
        }
        else{
            setError("Sono richiesti il completamento di tutti i campi!");
        }
    }

    return(
        <>
            <div className="form">
                <p>{msg !== "" ? <span className="success">{msg}</span> : <span className="error">{error}</span>}</p>
                <h2>LogIn</h2>
                <label>Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e) => handleInputChange(e, setError, setUser, "Username")}
                    onBlur={checkUser}  />
                <label>Password</label>
                <input 
                    type="password"
                    value={pass}
                    onChange={(e) => handleInputChange(e, setError, setPass, "Password")}
                    onBlur={checkPassword} />
                <label></label>
                <input 
                    type="submit"
                    defaultValue="Login" 
                    className="btn"
                    /* onSubmit={handleSubmit} */
                    onClick={handleLogin} />
            </div>
        </>
    );
}

export default FormLogIn;