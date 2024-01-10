<?php
function conectarBBDD(){
    try{
        $conexion = new PDO("mysql:host=192.168.138.250;port=33060;dbname=kartBBDD;charset=utf8","user","password");
        $conexion -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        return $conexion;
    }catch(PDOException $e){
        print "<p>Error al conectar con la BBDD ".$e->getMessage()."</p>";
    }
}
?>