import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { type UploadFormData, type PreviewData, CATEGORIA_PATHS, type Categoria } from '../types';
import { generateFinalFileName, validateImageFile } from '../utils/fileUtils';
import FileUpload from './FileUpload';
import ProductForm from './ProductForm';
import PreviewModal from './PreviewModal';
import { LogOut, Upload as UploadIcon, CheckCircle } from 'lucide-react';
import Galeria from './../utils/Galeria';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [formData, setFormData] = useState<UploadFormData>({
    file: null,
    nombrePrenda: '',
    categoria: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [refreshGallery, setRefreshGallery] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.file) {
      newErrors.file = 'Debe seleccionar una imagen';
    } else {
      const validation = validateImageFile(formData.file);
      if (!validation.isValid) {
        newErrors.file = validation.error || 'Archivo no válido';
      }
    }

    if (!formData.nombrePrenda.trim()) {
      newErrors.nombrePrenda = 'El nombre de la prenda es obligatorio';
    }

    if (!formData.categoria) {
      newErrors.categoria = 'Debe seleccionar una categoría';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileSelect = (file: File | null) => {
    setFormData(prev => ({ ...prev, file }));
    if (errors.file) {
      setErrors(prev => ({ ...prev, file: '' }));
    }
  };

  const handleFormChange = (data: UploadFormData) => {
    setFormData(data);
    // Limpiar errores cuando el usuario modifica los campos
    if (errors.nombrePrenda && data.nombrePrenda.trim()) {
      setErrors(prev => ({ ...prev, nombrePrenda: '' }));
    }
    if (errors.categoria && data.categoria) {
      setErrors(prev => ({ ...prev, categoria: '' }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const finalFileName = generateFinalFileName(formData.nombrePrenda, formData.file!);
    const destinationPath = CATEGORIA_PATHS[formData.categoria as Categoria];

    const preview: PreviewData = {
      ...formData,
      finalFileName,
      destinationPath
    };

    setPreviewData(preview);
    setShowPreview(true);
  };

  const handleConfirmUpload = async () => {
    if (!previewData) return;

    setIsUploading(true);

    try {
      // Simular proceso de subida
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Aquí iría la lógica real de subida del archivo
      console.log('Uploading file:', {
        file: previewData.file,
        fileName: previewData.finalFileName,
        destination: previewData.destinationPath,
        categoria: previewData.categoria
      });
      const handleUpload = async () => {
        const formData = new FormData();
        if (previewData.file) {
          formData.append('image', previewData.file);
          formData.append('finalFileName', previewData.finalFileName);
          formData.append('destinationPath', previewData.destinationPath);
          // src/assets/serigrafia-resource/Playeras
          formData.append('categoria', previewData.categoria);
        } else {
          throw new Error("No se seleccionó ningún archivo para subir.");
        }

        try {
          const res = await fetch('api/Upload.php', {
            method: 'POST',
            body: formData
          });
          const data = await res.json();
          console.log('URL de la imagen:', data.url);
        } catch (err) {
          alert("Error al subir la imagen: " + (err instanceof Error ? err.message : String(err)));
        }
      };
      handleUpload();
      setRefreshGallery(prev => !prev);
      setUploadSuccess(true);
      setShowPreview(false);

      // Resetear formulario
      setFormData({
        file: null,
        nombrePrenda: '',
        categoria: ''
      });

      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => setUploadSuccess(false), 3000);

    } catch (error) {
      console.error('Error uploading file:', error);
      // Aquí podrías mostrar un mensaje de error
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelPreview = () => {
    setShowPreview(false);
    setPreviewData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                <UploadIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Panel de Administración</h1>
                <p className="text-sm text-gray-500">Gestión de Imagenes - Serigrafía Textil</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.username}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              <button
                onClick={logout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                title="Cerrar sesión"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {uploadSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-green-800">¡Producto guardado exitosamente!</h3>
              <p className="text-sm text-green-700">El archivo se ha guardado en la ubicación especificada.</p>
            </div>
          </div>
          
        )}

        <div className="space-y-8">
          {/* File Upload Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Subir Nueva Imagen</h2>
            <FileUpload
              onFileSelect={handleFileSelect}
              selectedFile={formData.file}
              error={errors.file}
            />
          </div>

          {/* Product Form Section */}
          {formData.file && (
            <ProductForm
              formData={formData}
              onFormChange={handleFormChange}
              onSubmit={handleSubmit}
              errors={errors}
            />
          )}
        </div>
      </main>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={showPreview}
        previewData={previewData}
        onConfirm={handleConfirmUpload}
        onCancel={handleCancelPreview}
        isUploading={isUploading}
      />
      {/* Galería Section */}
      <Galeria 
      refreshTrigger={refreshGallery} 
      onImageDeleted={() => setRefreshGallery(prev => !prev)}
      />
    </div>

  );
};

export default AdminDashboard;