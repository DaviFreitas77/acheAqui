<?php
    require './db.php';

    $sql = 'SELECT * FROM tbLocal';

    try{
        $stmt = $conexao->prepare($sql);
        $stmt->execute();

        $local = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($local);
    }catch(PDOException $e){

        json_encode(['error'=> 'não foi possivel retornar as cores'. $e->getMessage()]);
    }


?>