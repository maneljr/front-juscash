export interface IJuscashData {
    assunto_processo:   IAssuntoProcesso[];
    reu_ajustado:       IReuAjustado[];
    unidade_judiciaria: IUnidadeJudiciaria[];
  }
  
  export interface IAssuntoProcesso {
    indice_assunto: number;
    nome_assunto:   string;
  }
  
  export interface IReuAjustado {
    classe:     IClasse[];
    indice_reu: number;
    nome:       string;
  }
  
  export interface IClasse {
    classe_id?:     number;
    nome_classe:    string;
    indice_classe?: number;
  }
  
  export interface IUnidadeJudiciaria {
    indice_judiciaria:       number;
    nome_unidade_judiciaria: string;
  }