import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const naviget = useNavigate();
    const { Component } = props;
    useEffect(() => {
        var login = localStorage.getItem("login");
        if(!login){
            localStorage.setItem("loginStatus", "Perfavore effettua prima il login!");
            naviget("/", {replace: true});
        }
    }, []);
    return(<Component />);
}

export default Protected;