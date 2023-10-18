<?php

    $email = $_REQUEST['emailRegistro'];
    $tlf = $_REQUEST['tlfRegistro'];
    $usuarioNuevo = $_REQUEST['usuarioRegistro'];
    $contraseñaNueva = $_REQUEST['contraseñaRegistro'];

    $open = fopen("jsonExample/ObjetosInicializados.json","w+");
    echo filesize(".jsonExample/ObjetosInicializados.json");
    $texto = fread($open, filesize("jsonExample/ObjetosInicializados.json"));
    str_replace("]",`,{"email":"$email","telefono":"$tlf","usuarioNuevo":"$nousuarioNuevombre","Contraseña:"$contraseñaNueva"}`,$texto); 
    $texto = $texto . "]";
    fwrite($open, $texto);
?>