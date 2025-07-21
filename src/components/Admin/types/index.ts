export interface User {
  id: string;
  username: string;
  email: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UploadFormData {
  file: File | null;
  nombrePrenda: string;
  categoria: string;
}

export interface PreviewData extends UploadFormData {
  finalFileName: string;
  destinationPath: string;
}

export type Categoria = 
  | 'Camisetas'
  | 'Gorras'
  | 'Bolsas'
  | 'Tazas'
  | 'Calendarios'
  | 'Artículos publicitarios'
  | 'Artículos para campañas';

export const CATEGORIAS: Categoria[] = [
  'Camisetas',
  'Gorras',
  'Bolsas',
  'Tazas',
  'Calendarios',
  'Artículos publicitarios',
  'Artículos para campañas'
];

export const CATEGORIA_PATHS: Record<Categoria, string> = {
  'Camisetas': 'src/assets/serigrafia-resource/Playeras',
  'Gorras': 'src/assets/serigrafia-resource/Gorras',
  'Bolsas': 'src/assets/serigrafia-resource/Bolsas',
  'Tazas': 'src/assets/serigrafia-resource/Tazas',
  'Calendarios': 'src/assets/serigrafia-resource/Calendarios',
  'Artículos publicitarios': 'src/assets/serigrafia-resource/Artículos_publicitarios',
  'Artículos para campañas': 'src/assets/serigrafia-resource/Articulos_para_campañas'
};