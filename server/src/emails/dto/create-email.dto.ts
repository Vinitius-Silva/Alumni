import { Candidatos } from "src/candidatos/entities/candidato.entity";

export class CreateEmailDto {
  idEmail?: number;
  email: string;
  emailTp: string;
  emailPrincipal: number;
  idCandidato: Candidatos;
}
