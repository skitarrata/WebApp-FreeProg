<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    // Connessione al database
    $servername = "localhost";
    $username = "react-user"; 
    $password = "1234"; 
    $dbname = "user"; 

    $conn = new mysqli($servername, $username, $password, $dbname);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    $sql = "SELECT typeprog, title FROM exercises"; // Modifica la query in base alla struttura del tuo database
    $result = $conn->query($sql);
    $files = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $files[] = $row;
        }
    }

    $conn->close();

    //header('Content-Type: application/json');
    echo json_encode($files);
?>