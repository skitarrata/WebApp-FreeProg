import React, { useState } from 'react';
import axios from 'axios';
import AuthDecode from '../Authenticate/AuthDecode';

function UploadVid() {
    const [title, setTitle] = useState('');
    const [language, setLanguage] = useState('');
    const [videoFile, setVideoFile] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
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
        const currentUser = AuthDecode();
        formData.append('title', title);
        formData.append('language', language);
        formData.append('video', videoFile);
        formData.append('user', currentUser.username);

        axios.post('http://localhost/react/upload_video.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data.message);
            alert(response.data.message);
        })
        .catch(error => {
            if (error.response) {
                console.error("Errore durante il caricamento del video:", error);
                alert("Errore durante il caricamento del video");
            }
            throw error;
        });
    };

    return (
        <>
            <div className="container-up">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Titolo video, consentiti MP4, AVI e MOV da 50MB"
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
                    <button className='btn' type="submit">Carica Video</button>
                </form>
            </div>
        </>
    );
}

export default UploadVid;