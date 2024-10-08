import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './SearchBar.css';
import '../Style.css';

const SearchBar = ({files, typefile}) => {
    const [filteredFiles, setFilteredFiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
            <div className="scroll-container" >
                <div className="scroll-content" >
                    {filteredFiles.map((file, index) => (
                        <Card key={index} title={file.title} typelan={file.typeprog} url={typefile == "ex" ? "http://localhost/react/uploads_ex/" + file.title : "http://localhost/react/uploads_video/" + file.names} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchBar;