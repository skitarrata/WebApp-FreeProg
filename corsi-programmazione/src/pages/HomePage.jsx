import NavBar from "../components/NavBar";
import Card from "../components/Card";

function HomePage(){
    return(
        <>
            <NavBar>
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