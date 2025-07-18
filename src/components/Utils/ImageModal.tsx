import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImagenAgrupada = {
  categoria: string;
  nombre: string;
  url: string;
};
type Categorias={
  categoria: string;
}

type ImageModalProps = {
  images: string | ImagenAgrupada[];
  categoria: string| Categorias[];
  children: React.ReactNode;
};

const ImageModal: React.FC<ImageModalProps> = ({ 
  images, 
  categoria,
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0); // Resetear índice al cerrar
  };

  // Normalizar las imágenes a un array
  const normalizedImages = typeof images === 'string' 
    ? [{ nombre: images, url: images, categoria: categoria.toString() }] 
    : images;

  const currentImage = normalizedImages[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? normalizedImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === normalizedImages.length - 1 ? 0 : prev + 1
    );
  };

  const showNavigation = normalizedImages.length > 1;

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
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Contenido del modal */}
            <div className="flex flex-col h-full">
              {/* Información técnica */}
              <div className="p-6">
                <h2 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
                  {currentImage.categoria.split('_').join(' ')}
                </h2>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">Detalles:</span>
                  <p className="text-md text-gray-700">{currentImage.nombre.split('/').pop()?.split('.jpg').join('')}</p>
                </div>
              </div>

              {/* Contenedor de imagen con navegación */}
              <div className="relative flex-1 min-h-[300px] bg-gray-100 flex items-center justify-center p-4">
                {/* Imagen */}
                <img
                  src={currentImage.url}
                  alt={currentImage.nombre}
                  className="object-contain max-h-[50vh] w-auto max-w-full"
                  loading="lazy"
                />

                {/* Navegación */}
                {showNavigation && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-gray-200 transition-colors shadow-md"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-gray-200 transition-colors shadow-md"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </>
                )}

                {/* Indicador de posición (solo si hay múltiples imágenes) */}
                {showNavigation && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {normalizedImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Pie del modal */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;