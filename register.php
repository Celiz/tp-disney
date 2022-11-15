<?php
$servername 
$user 
$password 
$dbname

$email = $_GET['email'];
$pass = $_GET['pass'];
$name = $_GET['name'];
$lastname = $_GET['lastname'];
$DNI = $_GET['DNI'];

if($name == "" || $lastname == "" || $DNI == "" || $email == "" || $pass == ""){
    echo "Error";
}else{
    $conn = new mysqli($servername, $user, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
    }
    $sql = "INSERT INTO usuarios() nombre, apellido, contrasena ,email, DNI VALUES ('$name', '$lastname', '$pass', '$email', '$DNI')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

?>
