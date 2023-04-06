/// <reference types="vite/client" />

export interface Patient {
  id: string;
  nome: string;
  dt_nascimento: string;
  cpf: string;
  telefone: string;
  foto: Image | null;
}

export interface iPacientCare {
  id: string;
  paciente_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  t: number;
  pas: number;
  pad: number;
  fc: number;
  fr: number;
  febre: number;
  coriza: number;
  nariz_intupido: number;
  cansaco: number;
  tosse: number;
  dor_cabeca: number;
  dores_corpo: number;
  mal_estar_geral: number;
  dor_garganta: number;
  dificuldade_respirar: number;
  falta_paladar: number;
  falta_olfato: number;
  dificuldade_locomocao: number;
  diarreia: number;
  deleted_at: null | string;
}

export interface IPacientCareView  extends iPacientCare{
  nome: string;
  cpf: string;
  dt_nascimento: string;
}

export interface iPacientCareData {
  atendimentos: IPacientCareView[];
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
