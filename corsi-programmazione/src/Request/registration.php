<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

    $conn = new mysqli("localhost", "react-user", "1234", "user");
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else {
        $eData = file_get_contents("php://input");
        $dData = json_decode($eData, true);

        $user = $dData['user'];
        $email = $dData['email'];
        $pass = $dData['pass'];
        $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);
        $result = "";

        if($user != "" and $email != "" and $pass != ""){
            $sql = "INSERT INTO user(user, email, pass) VALUE ('$user', '$email', '$hashed_pass');";
            $sql_check = "SELECT * FROM user WHERE user='$user' OR email='$email';";            
            $res_check = mysqli_query($conn, $sql_check);

                    if(mysqli_num_rows($res_check) != 0){
                            $row = mysqli_fetch_array($res_check);
                            if($user == $row['user'] or $email == $row['email']){
                                    $result = "Alcuni dati risultano già utilizzati!";
                            }
                    }
                    else{
                $res = mysqli_query($conn, $sql);
                if ($res){
                    $result = "Registrazione completata!";
                            }
                else{
                    $result = "";
                }
            }
        }
        else {
            $result = "";
        }

        $conn -> close();
        $response[] = array("result" => $result);
        echo json_encode($response);
    }
?>