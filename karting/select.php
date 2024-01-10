<?php
include("funciones.php");
    $conexion = conectarBBDD();

    $select = $conexion->query("select * from Coches");

    foreach ($select as $valor) {

    $listaDevuelta[] = $valor;
    }
    echo json_encode($listaDevuelta);
?>