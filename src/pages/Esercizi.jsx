import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import UploadEx from "../components/UploadEx";
import './Upld.css'

function Esercizi(){

    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await axios.get('http://localhost/react/fileload.php');
                setFiles(response.data);
            } catch (error) {
                console.error("Errore durante il caricamento dei file", error);
            }
        };
        fetchFiles();
    }, [files]);

    return(
        <>
            <NavBar use={0} changeBtm={"LogOut"} path={"/"} vis={"hidden"} >
                <UploadEx />
                <SearchBar files={files} typefile={"ex"}/>
            </NavBar>
        </>
    );
}

export default Esercizi;