<?php
header('Content-Type: application/json');

// Ruta donde están las imágenes
$baseDir = __DIR__ . './../serigrafia-resource';
$baseUrl = './serigrafia-resource';

$imagenes = [];

// Escanea todas las carpetas dentro de serigrafia-resource
$categorias = array_filter(glob($baseDir . '/*'), 'is_dir');

foreach ($categorias as $categoriaDir) {
    $categoria = basename($categoriaDir);

    // Escanea solo imágenes .jpg
    $archivos = glob($categoriaDir . '/*.jpg');

    foreach ($archivos as $archivo) {
        $nombrePrenda = pathinfo($archivo, PATHINFO_FILENAME);
        $file = $baseUrl . '/' . rawurlencode($categoria) . '/' . basename($archivo);

        $imagenes[] = [
            'file' => $file,
            'nombrePrenda' => $nombrePrenda,
            'categoria' => $categoria
        ];
    }
}

echo json_encode($imagenes, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);