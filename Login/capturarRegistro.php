<?php

    $email = $_REQUEST['emailRegistro'];
    $tlf = $_REQUEST['tlfRegistro'];
    $usuarioNuevo = $_REQUEST['usuarioRegistro'];
    $contraseñaNueva = $_REQUEST['contraseñaRegistro'];

 $open = fopen("./jsonExample/ObjetosInicializados.json","r");
 $texto = fread($open, filesize("./jsonExample/ObjetosInicializados.json"));
 $texto = str_replace("]",',{"email":"'. $email . '","tlf":"'.$tlf.'","nombre":"'. $usuarioNuevo . '","contraseña":"'. $contraseñaNueva .'"}',$texto); 
 $texto = $texto . "]";
 fclose($open);
 $open = fopen("./jsonExample/ObjetosInicializados.json","w+"); 
 fwrite($open, $texto);
 fclose($open);

    header('location:login.html');

?>