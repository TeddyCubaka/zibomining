<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');


define('USER',"brandon");
define('PASSWD',"2323");
define('SERVER',"45.14.194.16");
define('BASE',"zibomines");
$dsn="mysql:dbname=".BASE.";  port=3306;host=".SERVER;

    try{
        $con=new PDO($dsn,USER,PASSWD);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
      
        header('Content-Type: application/json; charset=utf-8');
        if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST)){
          
            $sql_select_one = "SELECT * FROM VISITOR_COUNTER where ip = ? ;";
            $result = $con->prepare($sql_select_one); 
            $result->execute([$ip]);
    
            $sql_insert = " INSERT INTO VISITOR_COUNTER(ip) VALUES(?) ";
    
            $number_of_rows = $result->fetchColumn(); 
    
    
            if(($number_of_rows >0) ){
                echo json_encode([
                    "status" => 400,
                    "data" => "already exist"
                ]);
                exit();
            }else{
                $result = $con->prepare($sql_insert); 
                $result->execute([$ip]);    
                
                
                echo json_encode([
                    "status" => 200,
                    "ip" => $ip,
                    "data" => "success"
                ]);
                exit();


            }
    
        }else{
            $sql_select_one = "SELECT count(*) as counter FROM VISITOR_COUNTER ;";
            $result = $con->prepare($sql_select_one); 
            $result->execute([$ip]);
            $data = $result->fetch(PDO::FETCH_OBJ);
            echo json_encode([
                "status" => 200,
                "ip" => $ip,
                "data" => $data
            ]);
        }
       
        
      }
      catch(PDOException $e){
        printf("Échec de la connexion : %s\n", $e->getMessage());
        header('Content-Type: application/json; charset=utf-8');
            echo json_encode([
                "status" => 500,
                "data" => $e->getMessage()
            ]);
        exit();
      }
      finally{
        try {
            $conn = NULL;
        } catch (\Throwable $th) {
            //throw $th;
        }
      }

?>