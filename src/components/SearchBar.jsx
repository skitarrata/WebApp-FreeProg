import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './SearchBar.css'

const SearchBar = ({files, typefile}) => {
    const [filteredFiles, setFilteredFiles] = useState([]); // File filtrati per la ricerca
    const [searchTerm, setSearchTerm] = useState("");
    const [url, setUrl] = useState("");

    // Funzione per aggiornare i file filtrati basati sulla ricerca
    useEffect(() => {
        if (searchTerm === "") {
            // Se il campo di ricerca è vuoto, mostra tutti i file
            setFilteredFiles(files);
        } else {
            const results = files.filter((file) =>
            file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            file.typeprog.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFiles(results);
        }

        if (typefile === "ex") {
        setUrl("http://localhost/react/uploads_ex/" + filteredFiles.title);
        }
        else if (typefile === "vid") {
        setUrl("http://localhost/react/uploads_video/" + filteredFiles.names);
        } else {
        setUrl("");
        }
    }, [searchTerm, files]);

    return (
        <>
            <div className='container-search'>
                <form>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Cerca file..."
                    />
                </form>
            </div>
            {filteredFiles.map((file, index) => (
                <Card key={index} title={file.title} typelan={file.typeprog} url={url} />
            ))}
        </>
    );
};

export default SearchBar;