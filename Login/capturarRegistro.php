<?php

    $email = $_REQUEST['emailRegistro'];
    $tlf = $_REQUEST['tlfRegistro'];
    $usuarioNuevo = $_REQUEST['usuarioRegistro'];
    $contraseñaNueva = $_REQUEST['contraseñaRegistro'];

    $open = fopen("jsonExample/ObjetosInicializados.json","w");

    if($open){
    echo filesize("jsonExample/ObjetosInicializados.json");
    $texto = fread($open, filesize("jsonExample/ObjetosInicializados.json"));
    $texto = str_replace("]",`,{"email":"$email","telefono":"$tlf","usuarioNuevo":"$usuarioNuevo","Contraseña:"$contraseñaNueva"}]`,$texto); 
    $texto = $texto . "]";
    fwrite($open, $texto);

    header("location:registro.html");
    fclose($open);
    }
?>