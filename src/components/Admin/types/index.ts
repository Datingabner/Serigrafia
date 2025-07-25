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
  | 'Playeras'
  | 'Gorras'
  | 'Bolsas'
  | 'Tazas'
  | 'Calendarios'
  | 'Artículos publicitarios'
  | 'Artículos para campañas';

export const CATEGORIAS: Categoria[] = [
  'Playeras',
  'Gorras',
  'Bolsas',
  'Tazas',
  'Calendarios',
  'Artículos publicitarios',
  'Artículos para campañas'
];

export const CATEGORIA_PATHS: Record<Categoria, string> = {
  'Playeras': './../serigrafia-resource/Playeras',
  'Gorras': './../serigrafia-resource/Gorras',
  'Bolsas': './../serigrafia-resource/Bolsas',
  'Tazas': './../serigrafia-resource/Tazas',
  'Calendarios': './../serigrafia-resource/Calendarios',
  'Artículos publicitarios': './../serigrafia-resource/Articulos_publicitarios',
  'Artículos para campañas': './../serigrafia-resource/Articulos_para_campanias'
};