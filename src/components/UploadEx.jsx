import React, { useState } from 'react';
import axios from 'axios';

function UploadEx() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!file) {
            alert("Per favore seleziona un file prima di caricare.");
            return;
        }

        // Creazione di un oggetto FormData per inviare il file al server
        const formData = new FormData();
        formData.append('file', file);

        // Invia la richiesta POST al server PHP
        axios.post('http://localhost/react/upload_ex.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            if (error.response) {
                console.error("Errore durante il caricamento del file:", error)
            }
            throw error;

        });
    };

    return (
        <>
            <div className="container-up"> 
                <form onSubmit={handleSubmit} >
                    <input type="file" onChange={handleFileChange} />
                    <button className='btn' type="submit">Carica File</button>
                </form>
                <h6>consentiti JPG, JPEG, TXT, DOC e PDF da 5MB</h6>
            </div>
        </>
    );
}

export default UploadEx;