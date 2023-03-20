/// <reference types="vite/client" />

export interface Patient {
  name: string;
  birthdate: Date;
  cpf: string;
  phone: string;
  photo: File | null;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
