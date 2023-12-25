<?php
require("acceso_mysql2.php");

if (isset($_POST["matricula"])){
   $matricula = $_POST["matricula"];  

                //error_log(print_r(,true));

            $stmt = $dbh->prepare("update Coches where matricula = ?");
            $stmt->execute([$matricula]);

            if($stmt->rowCount() == 0){
                echo "{'estado':'error','mensaje':'No se ha podido borrar el registro'}";
            }else{
                echo "{'estado':'ok'}";
            }
            
        }else{
            echo "{'estado':'error'}";
        }
?>