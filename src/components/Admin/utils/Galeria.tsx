import ImageModal from "../../Admin/components/ModalAdmin";
import { useEffect, useState } from 'react';

type getImagenesProps = {
  refreshTrigger?: boolean;
  onImageDeleted?: () => void; // Nueva prop para notificar eliminación
};

const getImagenesPorCategoria: React.FC<getImagenesProps> = ({ 
  refreshTrigger,
  onImageDeleted 
}) => {
    type Imagen = {
        file: string;
        nombrePrenda: string;
        categoria: string;
    };

    const [imagenes, setImagenes] = useState<Imagen[]>([]);
    const [localRefresh, setLocalRefresh] = useState(false); // Estado local para refrescar

    const fetchImages = () => {
        fetch('api/ObtenerImagenes.php')
            .then(res => res.json())
            .then(data => {
                console.log('Imágenes obtenidas:', data);
                setImagenes(data);
            })
            .catch(error => {
                console.error('Error al cargar las imágenes:', error);
            });
    };

    useEffect(() => {
        fetchImages();
    }, [refreshTrigger, localRefresh]); // Ahora depende de localRefresh también

    const listaAgrupada = imagenes.map(({ file, nombrePrenda, categoria }) => ({
        categoria,
        nombre: nombrePrenda,
        url: file,
    }));

    const handleDeleteSuccess = () => {
        // Opción 1: Usar la prop para notificar al padre
        if (onImageDeleted) onImageDeleted();
        
        // Opción 2: Forzar refresco local
        setLocalRefresh(prev => !prev);
        
        // Opción 3: Volver a cargar las imágenes directamente
        // fetchImages();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Galeria</h3>
                <div className="columns-2 md:columns-4 gap-4 space-y-4">
                    {listaAgrupada.map((item) => (
                        <div key={item.nombre} className="inline-block w-full">
                            <ImageModal
                                imagen={{
                                    url: item.url,
                                    categoria: item.categoria,
                                    nombrePrenda: item.nombre,
                                }}
                                onDelete={async () => {
                                    try {
                                        console.log('Eliminando imagen:', item.url);
                                        const response = await fetch(
                                            `api/eliminar-imagen.php?url=${encodeURIComponent("./."+item.url)}`, 
                                            { method: 'DELETE' }
                                        );
                                        const data = await response.json();
                                        
                                        if (data.success) {
                                            handleDeleteSuccess(); // Actualizar después de eliminar
                                        }
                                        
                                        return data;
                                    } catch (error) {
                                        return { success: false, message: 'Error de conexión' };
                                    }
                                }}
                            >
                                <div className="group relative">
                                    <img 
                                        src={item.url} 
                                        alt={item.categoria} 
                                        className='w-full rounded-lg hover:opacity-90 transition-opacity duration-300' 
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-medium bg-black/50 px-2 py-1 rounded">
                                            Administrar
                                        </span>
                                    </div>
                                </div>
                            </ImageModal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default getImagenesPorCategoria;