<?php
$servername = "localhost";
$user  = "472919";
$password = "lunaylaky2017";
$dbname = "472919";



$email = $_GET['email'];
$pass = $_GET['pass'];

if($email == "" || $pass == ""){
    echo "Error";
}else{

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
    }
    $sql = "SELECT * FROM usuario WHERE email = '$email' AND contrasena = '$pass'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "1";
    } else {
        echo "0";
    }
}

?>