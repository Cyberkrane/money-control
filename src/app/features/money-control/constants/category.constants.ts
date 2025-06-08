export const CATEGORY = {
  FOOD: 'Alimentos',
  HEALTH: 'Salud',
  ENTERTAINMENT: 'Entretenimiento',
  CLOTHES: 'Ropa',
  SERVICES: 'Servicios',
  CONSTRUCTION: 'construción',
} as const;

// Tipos derivados automáticamente
export type CategoryKey = keyof typeof CATEGORY;          
export type CategoryValue = typeof CATEGORY[CategoryKey];