<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Configurazione delle variabili di connessione al database
    $servername = "localhost";
    $username = "react-user"; 
    $password = "1234"; 
    $dbname = "user"; 

    // Connessione al database MySQL
    $conn = new mysqli($servername, $username, $password, $dbname);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $title = $_POST['title'];
        $language = $_POST['language'];
        
        // Gestione del file video
        $target_dir = "/opt/lampp/htdocs/react/uploads_video";
        $target_file = "$target_dir/" . basename($_FILES["video"]["name"]);
        $names = basename($_FILES["video"]["name"]);
        $uploadOk = 1;
        $videoFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        
        // Crea la directory se non esiste
        if (!file_exists($target_dir)) {
            if (is_writable(dirname($target_dir))) {
                if (mkdir($target_dir, 0777, true)) {
                        echo "Cartella creata con successo in " . $target_dir;
                } else {
                        echo "Errore nella creazione della cartella.";
                }
            } else {
                echo "Non hai i permessi necessari per creare la cartella in questa directory.";
            }
        }

        // Controlla se il file è effettivamente un video
        $check = mime_content_type($_FILES["video"]["tmp_name"]);
        if(strpos($check, "video") === false) {
            echo json_encode(["success" => false, "message" => "Il file non è un video."]);
            http_response_code(400);
            $uploadOk = 0;
        }

        // Controlla se il file esiste già
        if (file_exists($target_file)) {
            echo json_encode(["success" => false, "message" => "Il file esiste già."]);
            http_response_code(400);
            $uploadOk = 0;
        }

        // Controlla la dimensione del file (opzionale)
        if ($_FILES["video"]["size"] > 50000000) { // 50MB
            echo json_encode(["success" => false, "message" => "Il file è troppo grande."]);
            http_response_code(400);
            $uploadOk = 0;
        }

        // Controlla i formati consentiti
        if($videoFileType != "mp4" && $videoFileType != "avi" && $videoFileType != "mov") {
            echo json_encode(["success" => false, "message" => "Sono consentiti solo i formati MP4, AVI, MOV."]);
            http_response_code(400);
            $uploadOk = 0;
        }

        if ($uploadOk == 1) {
            if (move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)) {
                $sql = "INSERT INTO videos (title, names, typeprog, paths) VALUE ('$title', '$names', '$language', '$target_file')";
                if ($conn->query($sql) === TRUE) {
                    echo json_encode(["success" => true, "message" => "Video caricato con successo."]);
                    http_response_code(200);
                } else {
                    echo json_encode(["success" => false, "message" => "Errore nel database: " . $conn->error]);
                    http_response_code(500);
                }
            } else {
                echo json_encode(["success" => false, "message" => "Errore durante il caricamento del file."]);
                http_response_code(500);
            }
        }
    }

    $conn->close();
?>