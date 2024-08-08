import NavBar from "../components/NavBar";

function Home(){
    return(
        <>
            <NavBar use={1} >
                <div className="update">
                    <h2>Aggiunto di recente:</h2>
                </div>
            </NavBar>
        </>
    );
}

export default Home;