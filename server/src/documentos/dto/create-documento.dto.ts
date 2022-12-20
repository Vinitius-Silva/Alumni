import { Candidatos } from "src/candidatos/entities/candidato.entity";

export class CreateDocumentoDto {
  idDocumento?: number;
  rg: string;
  rgEmissor: string;
  rgDtEmissao: Date;
  rgEstEmissor: string;
  cnh: string;
  cnhDtValidade: Date;
  cnhCategoria: string;
  idCandidato: Candidatos;
}
