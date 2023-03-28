/// <reference types="vite/client" />

export interface Patient {
  id: string;
  nome: string;
  dt_nascimento: string;
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
