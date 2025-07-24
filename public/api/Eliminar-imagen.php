<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

$imageUrl = $_GET['url'] ?? '';
$basePath = realpath(__DIR__ . './../serigrafia-resource');
$filePath = realpath($basePath . '/' . basename($imageUrl));

// Validaciones de seguridad
if (!$imageUrl || !$filePath || strpos($filePath, $basePath) !== 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Ruta de imagen no válida'.$filePath]);
    exit;
}

if (file_exists($filePath)) {
    if (unlink($filePath)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo eliminar el archivo']);
    }
} else {
    http_response_code(404);
    echo json_encode(['error' => 'El archivo no existe']);
}
?>