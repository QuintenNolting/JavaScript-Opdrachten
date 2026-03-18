<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = "pokedex";
$port = 3306;

$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
header('Content-Type: application/json');

$sql = "
SELECT 
    pokemon.id,
    pokemon.name AS pokemon_name,
    pokemon.species,
    pokemon.height,
    pokemon.weight,
    pokemon.generation,
    GROUP_CONCAT(types.name ORDER BY pokemon_types.slot) AS types
FROM pokemon
JOIN pokemon_types ON pokemon.id = pokemon_types.pokemon_id
JOIN types ON pokemon_types.type_id = types.id
WHERE pokemon.name = '" . $_POST["name"] . "'
GROUP BY pokemon.id
";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo json_encode($row);