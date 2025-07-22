<?php
header('Content-Type: application/json');
$nombreArchivo=$_POST['finalFileName'];
$destinationPath=$_POST['destinationPath'];

// Carpeta destino
$uploadDir = __DIR__ . $destinationPath;
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Validaciones básicas
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['error'=>http_response_code(500)]);
    echo json_encode(['error' => 'Archivo no recibido correctamente']);
    exit;
}

// Generar nombre único
$fileName = $nombreArchivo;
$destination = $uploadDir ."/". $fileName;

// Mover archivo
if (move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
    echo json_encode(['url' => $destination.'/' . $fileName]);
} else {
    echo json_encode(['error'=>http_response_code(500)]);
    echo json_encode(['error' => 'No se pudo guardar el archivo']);
}
?>
