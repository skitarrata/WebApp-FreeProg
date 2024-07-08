import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSignIn(){
    const naviget = useNavigate();
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [err, setErr] = useState({
        us: false,
        em: false,
        pas1: false,
        pas2: false
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

    function checkEmail(){
        var count = 0;
        var pas = false;

        if (email.indexOf("@") === -1 || (email.indexOf(".it") === -1 && email.indexOf(".com") === -1 && email.indexOf(".org") === -1)){
            setError("Questa non è una Email");
            setErr({...err, em: false});
            return;
        }

        for(var i = 0; i < email.length; i++){
            if (email[i] === "@"){
                count++;
            }
            else if (email[i] === "." && email[i + 1] === "."){
                pas = true;
            }
            else if(email[i] !== "." && (email[i] < "0" || email[i] > "9") && (email[i] < "a" || email[i] > "z") && (email[i] < "A" || email[i] > "Z")){
                pas = true;
            }
        }

        if (count !== 1 || pas === true){
            setError("Email non consentita");
            setErr({...err, em: false});
            return;
        }
        controlEmail();
        setErr({...err, em: true});
        return;
    }
    
    function checkUser(){
        for(var i = 0; i < user.length; i++){
            if((user[i] < "0" || user[i] > "9") && (user[i] < "a" || user[i] > "z") && (user[i] < "A" || user[i] > "Z")){
                setError("Carattere non concesso");
                setErr({...err, us: false});
                return ;
            }
        }
        controlUser();
        setErr({...err, us: true});
        return;
    }

    function checkPassword1(){
        if(pass1.length < 8){
            setError("Almeno 8 caratteri per la password!");
            setErr({...err, pas1: false});
            return;
        }

        for(var i = 0; i < pass1.length; i++){
            if((pass1[i] < "!" || pass1[i] === "\"" || pass1[i] === "\'" || pass1[i] === "<" || pass1[i] === ">" || pass1[i] === "|" || pass1[i] > "~")){
                setError("Carattere non concesso");
                setErr({...err, pas1: false});
                return ;
            }
        }
        setErr({...err, pas1: true});
        return;
    }

    function checkPassword2(){
        if(pass2 !== pass1){
            setError("Le Password non Combaciano");
            setErr({...err, pas2: false});
            return;
        }

        for(var i = 0; i < pass2.length; i++){
            if((pass2[i] < "!" || pass2[i] === "\"" || pass2[i] === "\'" || pass2[i] === "<" || pass2[i] === ">" || pass2[i] === "|" || pass2[i] > "~")){
                setError("Carattere non concesso");
                setErr({...err, pas2: false});
                return;
            }
        }
        setErr({...err, pas2: true});
        return;
    }

    function controlUser(){
        var url = "http://localhost/react/controluser.php"
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            user: user,
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((m) => {
            setError(m);
            console.log(m);
        });
    }

    function controlEmail(){
        var url = "http://localhost/react/controlemail.php"
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email,
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((m) => {
            setError(m);
            console.log(m);
        });
    }

    function handleSubmit(){
        if(user !== "" && email !== "" && pass1 !== "" && pass2 !== ""){
            if (err.us !== false && err.em !== false && err.pas1 !== false && err.pas2 !== false ){
                var url = "http://localhost/react/registration.php"
                var headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                };
                var Data = {
                    user: user,
                    email: email,
                    pass: pass2
                }
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(Data)
                }).then((response) => response.json())
                .then((response) => {
                    if (response[0].result === "Alcuni dati risultano già utilizzati!"){
                        setError(response[0].result);
                    }
                    else{
                        setMsg(response[0].result);
                        setTimeout(function(){
                            naviget("/LogIn");
                        }, 3000);
                    }
                }).catch((m) => {
                    setError(m);
                    console.log(m);
                });
                setUser("");
                setEmail("");
                setPass1("");
                setPass2("");
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
                <h2>SignIn</h2>
                <label>Username</label>
                <input 
                    type="text" 
                    value={user}
                    onChange={(e) => handleInputChange(e, setError, setUser, "Username")}
                    onBlur={checkUser}  />
                <label>Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, setError, setEmail, "Email")} 
                    onBlur={checkEmail} />
                <label>Password</label>
                <input 
                    type="password"
                    value={pass1}
                    onChange={(e) => handleInputChange(e, setError, setPass1, "Password")}
                    onBlur={checkPassword1} />
                <label>Conferma Password</label>
                <input 
                    type="password"
                    value={pass2}
                    onChange={(e) => handleInputChange(e, setError, setPass2, "Conferma Password")}
                    onBlur={checkPassword2} />
                <label></label>
                <input 
                    type="submit"
                    defaultValue="submit" 
                    className="btn"
                    onClick={handleSubmit} />
            </div>
        </>
    );
}

export default FormSignIn;