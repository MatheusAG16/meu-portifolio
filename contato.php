<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testephp";

//Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falou: " . $conn->connect_error);
}

// Obter dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $POST['telefone'];

// Inserir dados na tabela
$sql = "INSERT INTO usuarios (nome, email, senha) values ('$nome', '$email', '$telefone')";

if ($conn->query($sql) === TRUE) {
    echo "Novo registo criado com sucesso";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechar conexção
$conn->close()
?>