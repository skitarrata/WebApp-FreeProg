<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost";
    $username = "react-user"; 
    $password = "1234";
    $dbname = "user";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }

    $questions = [];

    $sql = "SELECT q.id, q.question_text, q.created_at, GROUP_CONCAT(a.answer_text SEPARATOR '||') AS answers
            FROM questions q
            LEFT JOIN answers a ON q.id = a.question_id
            GROUP BY q.id
            ORDER BY q.created_at DESC";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $questions[] = [
                "id" => $row["id"],
                "question_text" => $row["question_text"],
                "created_at" => $row["created_at"],
                "answers" => explode('||', $row["answers"])
            ];
        }
    }

    echo json_encode($questions);
    $conn->close();
?>