import React, { useState, useEffect } from 'react';
import { type UploadFormData, CATEGORIAS, type Categoria } from '../types';
import { formatFileName } from '../utils/fileUtils';
import { Package, Tag, AlertCircle } from 'lucide-react';

interface ProductFormProps {
  formData: UploadFormData;
  onFormChange: (data: UploadFormData) => void;
  onSubmit: () => void;
  errors: Record<string, string>;
}

const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  errors
}) => {
  const [formattedName, setFormattedName] = useState('');

  useEffect(() => {
    if (formData.nombrePrenda) {
      setFormattedName(formatFileName(formData.nombrePrenda));
    } else {
      setFormattedName('');
    }
  }, [formData.nombrePrenda]);

  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFormChange({
      ...formData,
      nombrePrenda: value
    });
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFormChange({
      ...formData,
      categoria: e.target.value as Categoria
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const isFormValid = formData.file && formData.nombrePrenda.trim() && formData.categoria;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
        <Package className="h-5 w-5 mr-2 text-blue-600" />
        Información del Producto
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre de la Prenda */}
        <div>
          <label htmlFor="nombrePrenda" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre de la Prenda *
          </label>
          <input
            type="text"
            id="nombrePrenda"
            value={formData.nombrePrenda}
            onChange={handleNombreChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              errors.nombrePrenda ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Ej: Camiseta Polo Azul"
          />
          
          {/* Vista previa del nombre formateado */}
          {formattedName && (
            <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-200">
              <p className="text-xs text-blue-700">
                <strong>Nombre del archivo:</strong> {formattedName}
                {formData.file && `.${formData.file.name.split('.').pop()}`}
              </p>
            </div>
          )}
          
          {errors.nombrePrenda && (
            <div className="mt-2 flex items-center text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-2" />
              {errors.nombrePrenda}
            </div>
          )}
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-2">
            Categoría/Artículo *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Tag className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="categoria"
              value={formData.categoria}
              onChange={handleCategoriaChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                errors.categoria ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Seleccione una categoría</option>
              {CATEGORIAS.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
          
          {errors.categoria && (
            <div className="mt-2 flex items-center text-red-600 text-sm">
              <AlertCircle className="h-4 w-4 mr-2" />
              {errors.categoria}
            </div>
          )}
        </div>

        {/* Información adicional */}
        {formData.categoria && (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Información de destino:</h4>
            <p className="text-xs text-gray-600">
              <strong>Categoría:</strong> {formData.categoria}
            </p>
            <p className="text-xs text-gray-600">
              <strong>Ruta:</strong> src/assets/serigrafia-resource/{formData.categoria.replace(/\s+/g, '_')}
            </p>
          </div>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar a Vista Previa
        </button>
      </form>
    </div>
  );
};

export default ProductForm;