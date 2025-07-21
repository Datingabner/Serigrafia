import React from 'react';
import type { PreviewData } from '../types';
import { X, Check, ArrowLeft, Image as ImageIcon, Folder, FileText } from 'lucide-react';
import { createPreviewUrl } from '../utils/fileUtils';

interface PreviewModalProps {
  isOpen: boolean;
  previewData: PreviewData | null;
  onConfirm: () => void;
  onCancel: () => void;
  isUploading: boolean;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  previewData,
  onConfirm,
  onCancel,
  isUploading
}) => {
  if (!isOpen || !previewData) return null;

  const previewUrl = previewData.file ? createPreviewUrl(previewData.file) : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Vista Previa del Producto</h2>
          <button
            onClick={onCancel}
            disabled={isUploading}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 disabled:opacity-50"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image Preview */}
          {previewUrl && (
            <div className="text-center">
              <div className="inline-block p-4 bg-gray-50 rounded-lg">
                <img
                  src={previewUrl}
                  alt="Vista previa del producto"
                  className="max-w-full max-h-64 object-contain rounded-lg shadow-md"
                />
              </div>
            </div>
          )}

          {/* Product Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Nombre Original</h3>
                  <p className="text-gray-900">{previewData.nombrePrenda}</p>
                </div>
              </div>

              <div className="flex items-start">
                <ImageIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Nombre del Archivo</h3>
                  <p className="text-gray-900 font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                    {previewData.finalFileName}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Folder className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Categoría</h3>
                  <p className="text-gray-900">{previewData.categoria}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Folder className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Ruta de Destino</h3>
                  <p className="text-gray-900 font-mono text-xs bg-gray-100 px-2 py-1 rounded break-all">
                    {previewData.destinationPath}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* File Details */}
          {previewData.file && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Detalles del Archivo</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Tamaño:</span>
                  <span className="ml-2 text-gray-900">
                    {(previewData.file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Tipo:</span>
                  <span className="ml-2 text-gray-900">{previewData.file.type}</span>
                </div>
                <div>
                  <span className="text-gray-500">Última modificación:</span>
                  <span className="ml-2 text-gray-900">
                    {new Date(previewData.file.lastModified).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Confirme antes de continuar</h3>
                <p className="mt-1 text-sm text-yellow-700">
                  Una vez confirmado, el archivo se guardará en la ruta especificada. 
                  Verifique que toda la información sea correcta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onCancel}
            disabled={isUploading}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={isUploading}
            className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 flex items-center"
          >
            {isUploading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                <Check className="h-4 w-4 mr-2" />
                Confirmar y Guardar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;