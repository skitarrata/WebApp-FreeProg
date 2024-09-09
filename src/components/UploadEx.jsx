import React, { useState } from 'react';
import axios from 'axios';

function UploadEx() {
    const [file, setFile] = useState(null);
    const [language, setLanguage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            alert("Per favore seleziona un file prima di caricare.");
            return;
        }

        // Creazione di un oggetto FormData per inviare il file al server
        const formData = new FormData();
        formData.append('file', file);
        formData.append('language', language);

        // Invia la richiesta POST al server PHP
        axios.post('http://localhost/react/upload_ex.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response.data.message);
            alert(response.data.message);
        })
        .catch((error) => {
            if (error.response) {
                console.error("Errore durante il caricamento del file:", error);
                alert("Errore durante il caricamento del file");
            }
            throw error;
        });
    };

    return (
        <>
            <div className="container-up"> 
                <form onSubmit={handleSubmit} >
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                    <select className='dropdown-select' value={language} onChange={handleLanguageChange} required >
                        <option value="" disabled>Linguaggio</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                        <option value="C">C</option>
                        <option value="Python">Python</option>
                    </select>
                    <button className='btn' type="submit">Carica File</button>
                </form>
                <h6>consentiti JPG, JPEG, TXT, DOC e PDF da 5MB</h6>
            </div>
        </>
    );
}

export default UploadEx;