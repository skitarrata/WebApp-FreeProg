<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");
    header('Content-Type: application/json');

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

    $sql = "SELECT title, typeprog, names FROM videos";
    $result = $conn->query($sql);
    $files = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $files[] = $row;
        }
    }

    $conn->close();

    echo json_encode($files);
?>