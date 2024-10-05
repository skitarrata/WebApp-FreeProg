import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        navigate('/HomePage');
        }
    }, [navigate]);

    return(
        <>
            <NavBar use={1} >
                <div className="update" >
                    <h1>Ecco cosa potrai imparare</h1>
                </div>
                <Card 
                    title="Corsi JavaScript"
                    typelan="JavaScript"
                    url=""></Card>
                <Card 
                    title="Corsi HTML"
                    typelan="HTML"
                    url=""></Card>
                <Card 
                    title="Corsi CSS"
                    typelan="CSS"
                    url=""></Card>
                <Card 
                    title="Corsi Java"
                    typelan="Java"
                    url=""></Card>
                <Card 
                    title="Corsi C++"
                    typelan="C++"
                    url=""></Card>
                <Card 
                    title="Corsi C#"
                    typelan="C#"
                    url=""></Card>
                <Card 
                    title="Corsi C"
                    typelan="C"
                    url=""></Card>
                <Card 
                    title="Corsi Python"
                    typelan="Python"
                    url=""></Card>
            </NavBar>
        </>
    );
}

export default Home;