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

    // Configura la directory in cui verranno salvati i file
    $target_dir = "/opt/lampp/htdocs/react/uploads_ex";
    $file_name_arr = explode(".", $_FILES["file"]["name"]);
    $file_name = basename($_FILES["file"]["name"]);

    // Crea la directory se non esiste
    if (!file_exists($target_dir)) {
        umask(0);
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
    
    $target_file = "$target_dir/$file_name"; // Configura il percorso completo del file
    $uploadOk = 1; // Variabile per tenere traccia dell'upload
    $message = "";

    // Verifica se il file esiste già
    if (file_exists($target_file)) {
        $message = "Il file esiste già.";
        $uploadOk = 0;
    }

    // Verifica la dimensione del file (massimo 5MB)
    if ($_FILES["file"]["size"] > 5000000) {
        $message = "Il file è troppo grande.";
        $uploadOk = 0;
    }

    // Verifica il tipo di file 
    $allowed_types = ["txt", "doc", "jpeg", "jpg", "pdf"];
    if (!in_array($file_name_arr[1], $allowed_types)) {
        $message = "Solo JPG, JPEG, TXT, DOC e PDF sono consentiti.";
        $uploadOk = 0;
    }

    // Se tutte le verifiche sono superate, tenta di caricare il file
    if ($uploadOk == 1) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            // Se il file è stato caricato correttamente, salva le informazioni nel database
            $sql = "INSERT INTO exercises(title, paths) VALUE ('$file_name', '$target_file');";

            if ($conn->query($sql) === TRUE) {
                $message = "Il file " . $file_name . " è stato caricato con successo e salvato nel database.";
            } else {
                $message = "Errore durante il salvataggio nel database.";
            }
        } else {
            $message = "Si è verificato un errore durante il caricamento del file. $target_file";
        }
    }

    // Chiudi la connessione al database
    $conn->close();
    $response[] = array("message" => $message);
    echo json_encode($response);
?>