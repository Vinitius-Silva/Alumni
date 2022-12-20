import { Candidatos } from "src/candidatos/entities/candidato.entity";

export class CreateTelefoneDto {
  idTelefone?: number;
  telefone: string;
  telefoneTp: string;
  idCandidato: Candidatos;
}
