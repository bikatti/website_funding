<?php
 $destinatario = 'info@yogaiskra.com';
 // esto es al correo al que se enviará el mensaje
 $nombre = $_POST['nombre'];
 $mensaje = $_POST['mensaje'];
 $email = $_POST['email'];
 $asunto = $_POST['asunto'];

 $header = "Enviado por " . $nombre . " desde la página de web de Yogaiskra.com";
 $mensajeCompleto = $header . "\n" . $mensaje . "\nAtentamente: " . $nombre . "\nDe: " . $email;

 mail($destinatario, $asunto, $mensajeCompleto);
 echo "<script>alert('mensaje enviado!')</script>";
 echo "<script> setTimeout(\"location.href='/'\", 1000)</script>";
?>