/**
 * Valida si el archivo es una imagen válida
 */
export const validateImageFile = (file: File): { isValid: boolean; error?: string } => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  const maxSize = 10 * 1024 * 1024; // 10MB
  
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: 'Formato de archivo no válido. Solo se permiten archivos .jpg, .jpeg y .png'
    };
  }
  
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: 'El archivo es demasiado grande. Tamaño máximo: 10MB'
    };
  }
  
  return { isValid: true };
};

/**
 * Convierte el nombre de la prenda reemplazando espacios por guiones
 */
export const formatFileName = (nombrePrenda: string): string => {
  return nombrePrenda
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9\-]/g, '');
};

/**
 * Genera el nombre final del archivo
 */
export const generateFinalFileName = (nombrePrenda: string, file: File): string => {
  const formattedName = formatFileName(nombrePrenda);
  const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  return `${formattedName}.${extension}`;
};

/**
 * Crea una URL de vista previa para el archivo
 */
export const createPreviewUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

/**
 * Libera la URL de vista previa
 */
export const revokePreviewUrl = (url: string): void => {
  URL.revokeObjectURL(url);
};