export interface User {
  _id: string;
  email: string;
  password: string;
}

export interface Aporte {
  _id: string;
  ramo: string;
  titulo: string;
  descripcion: string;
  url: string;
  autor: string;
  likes: number;
  updatedAt: Date;
  createdAt: Date;
}
