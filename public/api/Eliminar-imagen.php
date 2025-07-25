<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

$imageUrl = $_GET['url'] ?? '';
$filePath = realpath($imageUrl);

// Validaciones de seguridad
if (!$imageUrl || !$filePath) {
    http_response_code(400);
    echo json_encode(['error' => 'Ruta deimagen no válida'.$filePath]);
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