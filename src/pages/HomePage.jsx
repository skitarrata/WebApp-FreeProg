import NavBar from "../components/NavBar";
import Card from "../components/Card";
import CookieComponent from "../components/CookieComponent";

function HomePage(){
    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
            <CookieComponent/>
                <Card 
                    title="Corso JavaScript"
                    typelan="JavaScript"></Card>
                <Card 
                    title="Corso HTML"
                    typelan="HTML"></Card>
                <Card 
                    title="Corso CSS"
                    typelan="CSS"></Card>
                <Card 
                    title="Corso Java"
                    typelan="Java"></Card>
                <Card 
                    title="Corso C++"
                    typelan="C++"></Card>
                <Card 
                    title="Corso C#"
                    typelan="C#"></Card>
                <Card 
                    title="Corso C"
                    typelan="C"></Card>
                <Card 
                    title="Corso Python"
                    typelan="Python"></Card>
            </NavBar>
        </>
    );
}

export default HomePage;