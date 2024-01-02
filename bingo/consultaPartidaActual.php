<?php

try{
    $conexion = new PDO("mysql:host=localhost;dbname=Bingo;charset=utf8","root","");

    $conexion -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $select = "select * from Estadisticas";

        $resultadoSelect = $conexion -> query($select);
    $datos = [];
        foreach ($resultadoSelect as $resultado) {
            $datos[] = $resultado;
        }
        echo json_encode($datos);

    }catch(PDOException $e){
        print "<p>Error no se pudo conectar a la bbdd ".$e."</p>";
    }

    //echo '{"IdPartida":1,"Premio":9, "NumCartones":10,"NumerosActuales":[10,2,3,8,55]}';
?>