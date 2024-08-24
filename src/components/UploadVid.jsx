import React, { useState } from 'react';
import axios from 'axios';

function UploadVid() {
    const [title, setTitle] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!videoFile) {
            alert("Per favore seleziona un Video prima di caricare.");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('video', videoFile);

        axios.post('http://localhost/react/upload_video.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            setMessage(response.data.message);
        })
        .catch(error => {
            console.error("Errore durante il caricamento del video.", error);
            setMessage('Errore durante il caricamento del video.');
        });
    };

    return (
        <>
            <div className="container-up">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Titolo del video"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        required
                    />
                    <button className='btn' type="submit">Carica Video</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
}

export default UploadVid;