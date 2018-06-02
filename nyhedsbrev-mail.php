<?php

$to=$_REQUEST['email'];

$email=$_REQUEST['email'];
$emne="Velkommen til Blinkenbikes nyhedsbrev!";
$besked="Du er nu tilmeldt Blinkenbikes nyhedsbrev. Vi glæder os til at holde dig opdateret om vores produkter.";

$subject=$emne;
$message="<h1>" . $emne . "</h1>" . $besked;


$header = "Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:jennifer@jenniferolid.dk";

mail($to, $subject, $message, $header);
header("Location: nyhedsbrev-tak.html");
?>
