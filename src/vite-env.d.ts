/// <reference types="vite/client" />

export interface Patient {
  name: string;
  birthdate: Date;
  cpf: string;
  phone: string;
  photo: File | null;
}