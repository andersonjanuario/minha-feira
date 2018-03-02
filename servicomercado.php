<?php
$data = json_decode(file_get_contents("php://input"));
	
switch ($_GET["op"]) {
	case 'incluir':

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

				$sql = "INSERT INTO `mercado` (`id`, 
													`nome`, 
													`imagem`,
													`localizacao`)                                                
													VALUES 
													(NULL, 
													 '" . $data->nome . "', 
													 '" . $data->imagem . "', 
													 '" . $data->localizacao . "')";

				$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
				mysqli_close($conexao);
				
				$arr = array('message' => 'Mercado Cadastrado com sucesso!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(201);
			}
		}	
	
	break;
	case 'alterar':	
	break;
	case 'delete':	
	
		if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
			if($data->id === '' || $data->id === null){
				$arr = array('message' => 'Campo obrigatorios!');
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(500);
			}else{		
				$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
				mysqli_set_charset($conexao,"utf8");
				mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

				$sql = "DELETE FROM `mercado` WHERE id =".$data->id;

				$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
				mysqli_close($conexao);
				
				$arr = array('message' => 'Mercado Cadastrado com sucesso!'); //etc
				header('HTTP/1.1 201 Created');
				echo json_encode($arr);
				http_response_code(201);
			}
		}	
		
	
	
	break;	
	default:
	
		//echo '[{"id":"1","nome":"Todo o dia","imagem":"aaaa","localizacao":"são lourenço"},{"id":"2","nome":"Atacadão","imagem":"bbbb","localizacao":"camaragibe"},{"id":"3","nome":"Pageu","imagem":"cccccc","localizacao":"Ceasa"},{"id":"4","nome":"Hiper","imagem":"ddddd","localizacao":"boa viagem"}]';
		if($_SERVER['REQUEST_METHOD'] === 'GET'){
	
			$conexao = mysqli_connect("localhost","root","") or die( "nao foi possivel conectar" );
			mysqli_set_charset($conexao,"utf8");
			mysqli_select_db($conexao,"compras") or die ("Nao foi possivel selecionar o banco de dados");

			//TOTAL
			$total = 0;
            $sql = "SELECT  COUNT(`id`) as count FROM `mercado`";
            
            $query = mysqli_query($conexao, $sql) or die('Erro na execução do get Total!');
            while ($objItem = mysqli_fetch_object($query)) {
                $total = $objItem;
            }
			header('X-Total-Registros: '.$total->count);
			
			//LISTAGEM
			$sql = "SELECT * FROM `mercado` ";
			$sql.= ' LIMIT ' . $_GET["page"] . ' , ' . $_GET["size"];
			//die($sql);
			$query = mysqli_query($conexao, $sql) or die('Erro na execução da query!');
			$array = array();       
			while ($objItem = mysqli_fetch_object($query)) {
				$array[] = $objItem;            
			}
			
			
			
			
			echo json_encode($array);				
			
			mysqli_close($conexao);
			
			header('HTTP/1.1 201 Created');
			http_response_code(201);
			
		}		
	break;	
}	
?>