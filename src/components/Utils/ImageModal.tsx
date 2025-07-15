import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  title: string;
  technique: string;
  children: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  imageUrl, 
  title, 
  technique, 
  children 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Elemento clickeable que abre el modal */}
      <div onClick={openModal} className="cursor-pointer">
        {children}
      </div>

      {/* Modal superpuesto */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 bg-opacity-90">
          <div className="relative max-w-4xl h-min  bg-white rounded-lg overflow-hidden shadow-xl">
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white bg-opacity-80 hover:bg-gray-200 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Contenido del modal */}
            <div className="relative h-min">
              

              {/* Información técnica */}
              <div className="md:w-full p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <div className="mb-4 ">
                  <span className="text-sm font-semibold text-gray-500">Técnica:</span>
                  <p className="text-md text-gray-700">{technique}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200">
                    {/* Imagen */}
              <div className="w-full h-auto md:w-full p-3 md:h-auto bg-gray-100 flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-contain max-h-[70vh] w-12/16"
                  loading="lazy"
                />
              </div>
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
        </div>
      )}
    </>
  );
};

export default ImageModal;