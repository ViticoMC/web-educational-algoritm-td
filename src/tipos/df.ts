export interface DF {
  implicantes: string[];
  implicados: string[];
}

export interface ConjuntoDF {
  df: DF[];
  nombre: string;
  id: number;
}
