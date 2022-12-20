import { Concursos } from "src/concursos/entities/concurso.entity";

export class CreateCandidatoDto {
  idCandidato?: number;
  nome: string;
  nomePai: string;
  nomeMae: string;
  dtNasc: Date;
  sexo: string;
  escolaridade: string;
  estadoCivil: string;
  naturalidade: string;
  natEstado: string;
  raca: string;
  idConcurso: Concursos;
}
