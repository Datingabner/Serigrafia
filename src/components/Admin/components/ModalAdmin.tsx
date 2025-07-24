import React, { useState} from 'react';
import { X, Trash2, Loader2 } from 'lucide-react';

type Imagen = {
  url: string;
  categoria: string;
  nombrePrenda: string;
  id?: string; // Optional ID for deletion
};

type ImageModalAdminProps = {
  imagen: Imagen;
  onDelete?: (id?: string) => Promise<{ success: boolean; message?: string }>;
  children: React.ReactNode;
};

const ImageModalAdmin: React.FC<ImageModalAdminProps> = ({ 
  imagen, 
  onDelete,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage] = useState<Imagen>(imagen);
  const [isDeleting, setIsDeleting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{text: string; type: 'success' | 'error'} | null>(null);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setStatusMessage(null);
  };

  const handleDelete = async () => {
    if (!onDelete) return;
    
    setIsDeleting(true);
    try {
      const result = await onDelete(currentImage.id);
      if (result.success) {
        setStatusMessage({ text: 'Imagen eliminada correctamente', type: 'success' });
        // Close modal after successful deletion
        setTimeout(() => closeModal(), 1500);
      } else {
        setStatusMessage({ text: result.message || 'Error al eliminar la imagen', type: 'error' });
      }
    } catch (error) {
      setStatusMessage({ text: 'Error de conexión', type: 'error' });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {/* Elemento clickeable que abre el modal */}
      <div 
        onClick={openModal} 
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openModal()}
      >
        {children}
      </div>

      {/* Modal superpuesto */}
      {isOpen && (
        <div 
          className="fixed pt-18 inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-xl">
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white bg-opacity-80 hover:bg-gray-200 transition-colors"
              aria-label="Cerrar modal"
              disabled={ isDeleting}
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col h-full">
              {/* Información técnica */}
              <div className="p-6">
                <h2 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
                  {currentImage.categoria.split("-").join(" ")}
                </h2>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">Prenda:</span>
                  <p className="text-md text-gray-700">{currentImage.nombrePrenda}</p>
                </div>
              </div>

              {/* Contenedor de imagen */}
              <div className="relative flex-1 min-h-[300px] bg-gray-100 flex items-center justify-center p-4">
                {/* Imagen */}
                <img
                  src={currentImage.url}
                  alt={currentImage.nombrePrenda}
                  className="object-contain max-h-[50vh] w-auto max-w-full"
                  loading="lazy"
                />
              </div>

              {/* Acciones administrativas */}
              <div className="p-4 border-t border-gray-200 flex flex-col gap-3">
                {/* Status message */}
                {statusMessage && (
                  <div className={`p-2 rounded text-sm ${
                    statusMessage.type === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {statusMessage.text}
                  </div>
                )}

                <div className="flex gap-3">
                  {/* Botón para eliminar imagen */}
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting || !onDelete}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:bg-red-300"
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Eliminando...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                      </>
                    )}
                  </button>
                  {/* Botón de cerrar */}
                <button
                  onClick={closeModal}
                  disabled={isDeleting}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors disabled:bg-gray-100 disabled:text-gray-400"
                >
                  Cerrar
                </button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModalAdmin;