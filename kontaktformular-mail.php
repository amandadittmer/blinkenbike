<?php

$to="cathrinecamaras@gmail.com";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$emne=$_REQUEST['emne'];
$besked=$_REQUEST['besked'];

$subject=$emne;
$message="Sendt af " . $navn . "<br>" . $email . "<h1>" . $emne . "</h1>" . $besked;


$header = "Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:jennifer@jenniferolid.dk";

mail($to, $subject, $message, $header);
header("Location: kontaktformular-tak.html");


?>
