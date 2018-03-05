<?php
$data = json_decode(file_get_contents("php://input"));
	
switch ($_GET["op"]) {
	case 'add':

		if($_SERVER['REQUEST_METHOD'] === 'POST'){
			if($data->nome === '' || $data->nome === null){
				$arr = array('message' => 'Campo obrigatorios!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(500);
			}else{		
				$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
				mysqli_set_charset($conexao,"utf8");
				mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

				$sql = "INSERT INTO `item` (`id`, 
													`nome`, 
													`id_categoria`,
													`marca`)                                                
													VALUES 
													(NULL, 
													 '" . $data->nome . "', 
													 '" . $data->id_categoria . "', 
													 '" . $data->marca . "')";

				$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
				mysqli_close($conexao);
				
				$arr = array('message' => 'Mercado Cadastrado com sucesso!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(201);
			}
		}	
	
	break;
	case 'alt':	
	
		if($_SERVER['REQUEST_METHOD'] === 'PUT'){
			if($data->nome === '' || $data->nome === null){
				$arr = array('message' => 'Campo obrigatorios!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(500);
			}else{		
				$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
				mysqli_set_charset($conexao,"utf8");
				mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

				$sql = "UPDATE `item`  SET `nome` = '" . $data->nome . "', 
											  `id_categoria` = '" . $data->id_categoria . "', 
											  `marca` = '" . $data->marca . "'
									      WHERE `id` = " . $data->id . "";

				$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
				mysqli_close($conexao);
				
				$arr = array('message' => 'Mercado Atualizado com sucesso!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(201);
			}
		}	
	
	break;
	case 'del':	
		
		if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
			//die('teste');
			if($_GET["id"] === '' || $_GET["id"] === null){
				$arr = array('message' => 'Campo obrigatorios!');
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(500);
			}else{		
				$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
				mysqli_set_charset($conexao,"utf8");
				mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

				$sql = "DELETE FROM `item` WHERE id =".$_GET["id"];

				$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
				mysqli_close($conexao);
				
				$arr = array('message' => 'Item Excluido com sucesso!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(201);
			}
		}	
		
	
	
	break;	
	default:
	
		if($_SERVER['REQUEST_METHOD'] === 'GET'){
	
			$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
			mysqli_set_charset($conexao,"utf8");
			mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

			//TOTAL
			$total = 0;
            $sql = "SELECT  COUNT(`id`) as count FROM `item`";
            
            $query = mysqli_query($conexao, $sql) or die('Erro na execução do get Total!');
            while ($objItem = mysqli_fetch_object($query)) {
                $total = $objItem;
            }
			header('X-Total-Registros: '.$total->count);
			
			//LISTAGEM
			$sql = "SELECT i.*, c.nome as nome_categoria FROM `item` i INNER JOIN `categoria` c ON c.id = i.id_categoria ";
			$sql.= ' LIMIT ' . $_GET["page"] . ' , ' . $_GET["size"];
			//die($sql);
			$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
			$array = array();       
			while ($objItem = mysqli_fetch_object($query)) {
				$array[] = $objItem;            
			}
			
			$retorno->total = $total->count;
			$retorno->item = $array;
			echo json_encode($retorno);				
			
			//echo json_encode($array);				
			
			mysqli_close($conexao);
			
			header('HTTP/1.1 201 Created');
			http_response_code(200);
			
		}		
	break;	
}	
?>