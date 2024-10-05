import { useEffect, useState } from "react";
import { useAuth } from "../Authenticate/AuthContext";
import axios from 'axios';

function FormLogIn(){
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [errormsg, setErrorMsg] = useState("");
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
                setErrorMsg("Carattere non concesso");
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
                setErrorMsg("Carattere non concesso");
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
                axios.post('http://localhost/react/login.php', {
                    user: user,
                    pass: pass
                }, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                .then(response => {
                    console.log('Dati ritornati:', response.data);
                    if (response.data.message === "Login effettuato con successo, andiamo alla Home..."){
                        setMsg(response.data.message);
                        setTimeout(function(){
                            const token = response.data.token;
                            login(token);
                        }, 3000);
                    }
                })
                .catch(error => {
                    if (error.response) {
                        // Il server ha risposto con un codice di stato diverso da 2xx
                        console.error('Errore nei dati ritornati:', error.response.data);
                        console.error('Codice di stato:', error.response.status);
                    } else if (error.request) {
                        // La richiesta è stata fatta, ma non è stata ricevuta alcuna risposta
                        console.error('Nessuna risposta ricevuta:', error.request);
                    } else {
                        // Qualcosa è andato storto nella configurazione della richiesta
                        console.error('Errore nella configurazione della richiesta:', error.message);
                    }
                    throw error;
                });
                if (msg === "")
                    setErrorMsg("Dati Errati!!");
                setUser("");
                setPass("");
            }
            else{
                setErrorMsg("Ci sono Errori nel form");
            }
        }
        else{
            setErrorMsg("Sono richiesti il completamento di tutti i campi!");
        }
    }

    return(
        <>
            <div className="form">
                <p>{msg !== "" ? <span className="success">{msg}</span> : <span className="error">{errormsg}</span>}</p>
                <h2>LogIn</h2>
                <label>Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e) => handleInputChange(e, setErrorMsg, setUser, "Username")}
                    onBlur={checkUser}  />
                <label>Password</label>
                <input 
                    type="password"
                    value={pass}
                    onChange={(e) => handleInputChange(e, setErrorMsg, setPass, "Password")}
                    onBlur={checkPassword} />
                <label></label>
                <input 
                    type="submit"
                    defaultValue="Login" 
                    className="btn-log"
                    onClick={handleLogin} />
            </div>
        </>
    );
}

export default FormLogIn;