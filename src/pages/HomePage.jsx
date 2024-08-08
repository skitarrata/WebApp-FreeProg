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
                    imgUrl="./javascript.jpg"></Card>
                <Card 
                    title="Corso HTML"
                    imgUrl="./html.jpg"></Card>
                <Card 
                    title="Corso CSS"
                    imgUrl="./css.jpg"></Card>
                <Card 
                    title="Corso Java"
                    imgUrl="./java.jpg"></Card>
                <Card 
                    title="Corso C++"
                    imgUrl="./c++.jpg"></Card>
                <Card 
                    title="Corso C#"
                    imgUrl="./cs.jpg"></Card>
                <Card 
                    title="Corso C"
                    imgUrl="./c.jpg"></Card>
                <Card 
                    title="Corso Python"
                    imgUrl="./python.jpg"></Card>
            </NavBar>
        </>
    );
}

export default HomePage;