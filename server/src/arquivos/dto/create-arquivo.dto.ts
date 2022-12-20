import { Arqsituacoes } from "src/arqsituacoes/entities/arqsituacoe.entity";
import { Candidatos } from "src/candidatos/entities/candidato.entity";

export class CreateArquivoDto {
  idArquivo?: number;
  tpArquivo: string;
  arquivoDtInclusao?: Date;
  arquivoDtAnalise?: Date;
  exigencia: string;
  idArqSituacao: Arqsituacoes;
  idCandidato: Candidatos;
}
