<?php
    require "vendor/autoload.php";
    use \Firebase\JWT\JWT;

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }    
    
    $secret_key = "fr33pr0g";
    $issuer_claim = "http://localhost"; 
    $audience_claim = "corsi-programmazione";
    $issuedat_claim = time();
    $notbefore_claim = $issuedat_claim + 10; 
    $expire_claim = $issuedat_claim + 60;     

    $conn = new mysqli("localhost", "react-user", "1234", "user");
    if(mysqli_connect_error()){
        http_response_code(500);
        echo mysqli_connect_error();
        exit();
    }    

    $eData = file_get_contents("php://input");
    $data = json_decode($eData, true);

    $user = $data['user'];
    $pass = $data['pass'];    
    
    if ($user == "" or $pass == "") {
        http_response_code(400);
        echo json_encode(["message" => "Richiesta non valida. Parametri mancanti."]);
        exit();
    }

    $stmt = $conn->prepare("SELECT pass FROM user WHERE user = ?");
    if ($stmt === false) {
        http_response_code(500);
        echo json_encode(["message" => "Errore nella preparazione della query: "]);
        exit();
    }

    $stmt->bind_param("s", $user);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($hashed_password);

    if ($stmt->fetch()) {
        if (password_verify($pass, $hashed_password)) {
            $token = [
                "iss" => $issuer_claim,
                "aud" => $audience_claim,
                "iat" => $issuedat_claim,
                "nbf" => $notbefore_claim,
                "exp" => $expire_claim,
                "data" => [
                    "username" => $user,
                ]
            ];
            http_response_code(200);
            $jwt = JWT::encode($token, $secret_key, "HS256");
            echo json_encode([
                "message" => "Login effettuato con successo, andiamo alla Home...",
                "token" => $jwt,
                "expire_at" => $expire_claim
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["message" => "Credenziali non valide."]);
        }
    } else {
        http_response_code(404);
        echo json_encode(["message" => "Nessun utente trovato." . $user]);
    }

  $stmt->close();
  $conn->close();
?>