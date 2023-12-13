<?php
require("acceso_mysql2.php");
if(isset($_POST["matricula"])){
        $matricula = htmlspecialchars(trim(strip_tags($_POST['matricula'])),ENT_QUOTES,'utf-8');

        $stmt = $dbh->prepare("SELECT * FROM Coches where matricula = ?");
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute([$matricula]);

        if($stmt->fetch()){
                echo "{'estado':'error','mensaje':'matricula existente'}";
        }else{
                if(isset($_POST["marca"]) 
                && isset($_POST['modelo']) 
                && isset($_POST['cilindrada'])
                && isset($_POST['fecha'])
                && isset($_POST['foto'])){

                $marca = htmlspecialchars(trim(strip_tags($_POST['marca'])),ENT_QUOTES,'utf-8'); 
                $modelo = htmlspecialchars(trim(strip_tags($_POST['modelo'])),ENT_QUOTES,'utf-8');
                $cilindrada = htmlspecialchars(trim(strip_tags($_POST['cilindrada'])),ENT_QUOTES,'utf-8');
                $fecha = htmlspecialchars(trim(strip_tags($_POST['fecha'])),ENT_QUOTES,'utf-8');
                $foto = htmlspecialchars(trim(strip_tags($_POST['foto'])),ENT_QUOTES,'utf-8');

                $stmt = $dbh->prepare("insert into coches(matricula,marca,modelo,cilindrada,fecha,foto)
                        values(?,?,?,?,?,?)");
                $stmt->execute([$matricula,$marca,$modelo,$cilindrada,$fecha,$foto]);

                if($stmt->rowCount() === 0){
                        echo "{'estado':'error','mensaje':'No se ha podido dar de alta'}";
                }else{
                echo "{'estado':'ok'}";
        }
        }else{
                echo "{'estado':'error','mensaje':'faltan campos'}";
        }

        }
}else{
        echo "{'estado':'error','mensaje':'falta matricula'}";
}

while ($coche=$stmt->fetch()) {
        $arrayCoches[] = array_map('utf8_encode', $coche);
}
//enviamos el array como objeto JSON
echo json_encode($arrayCoches);

?>