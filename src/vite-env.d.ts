/// <reference types="vite/client" />

export interface Patient {
  nome: string;
  dt_nascimento: Date;
  cpf: string;
  telefone: string;
  foto: Image | null;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
