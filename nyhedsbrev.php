<?php

$to="Blinkenbike";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$emne="Velkommen til Food8!";
$besked="Du er nu tilmeldt Food8s nyhedsrev.";

$subject="Besked fra " . $navn . ": ". $email;
$message="<h1 style='color:red'>" . $emne . "</h1>" . $besked;


$header = "Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:jennifer@jenniferolid.dk";

mail($to, $subject, $message, $header);
header("Location: tak.html");


?>
