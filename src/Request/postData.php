<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost";
    $username = "react-user"; 
    $password = "1234";
    $dbname = "forum";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['question'])) {
        $stmt = $conn->prepare("INSERT INTO questions (question_text) VALUES (?)");
        $stmt->bind_param("s", $data['question']);
        $stmt->execute();
        echo json_encode(["success" => true]);
    } elseif (isset($data['answer'], $data['question_id'])) {
        $stmt = $conn->prepare("INSERT INTO answers (question_id, answer_text) VALUES (?, ?)");
        $stmt->bind_param("is", $data['question_id'], $data['answer']);
        $stmt->execute();
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["error" => "Invalid input"]);
    }

    $conn->close();
?>