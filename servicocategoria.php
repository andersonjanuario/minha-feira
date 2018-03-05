<?php
$data = json_decode(file_get_contents("php://input"));
	
switch ($_GET["op"]) {
	default:
	
		if($_SERVER['REQUEST_METHOD'] === 'GET'){
	
			$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
			mysqli_set_charset($conexao,"utf8");
			mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

			//TOTAL
			$total = 0;
            $sql = "SELECT  COUNT(`id`) as count FROM `categoria`";
            
            $query = mysqli_query($conexao, $sql) or die('Erro na execução do get Total!');
            while ($objItem = mysqli_fetch_object($query)) {
                $total = $objItem;
            }
			header('X-Total-Registros: '.$total->count);
			
			//LISTAGEM
			$sql = "SELECT * FROM `categoria` ";
			//$sql.= ' LIMIT ' . $_GET["page"] . ' , ' . $_GET["size"];
			//die($sql);
			$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
			$array = array();       
			while ($objItem = mysqli_fetch_object($query)) {
				$array[] = $objItem;            
			}
			
			//$retorno->total = $total->count;
			//$retorno->item = $array;
			//echo json_encode($retorno);				
			
			echo json_encode($array);				
			
			mysqli_close($conexao);
			
			header('HTTP/1.1 201 Created');
			http_response_code(200);
			
		}		
	break;	
}	
?>