import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import UploadVid from "../components/UploadVid";
import './Upld.css'

function Corsi(){
    const [files, setFiles] = useState([]);

    useEffect(() => {
    // Recupera i file dal backend PHP
        const fetchFiles = async () => {
            try {
                const response = await axios.get('http://localhost/react/videoload.php');
                setFiles(response.data);
            } catch (error) {
                console.error("Errore durante il caricamento dei file", error);
            }
        };
        fetchFiles();
    }, []);

    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
                <UploadVid />
                <SearchBar files={files} typefile={"vid"}/>
            </NavBar>
        </>
    );
}

export default Corsi;