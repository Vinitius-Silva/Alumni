import { Candidatos } from "src/candidatos/entities/candidato.entity";

export class CreateEnderecoDto {
  idEndereco?: number;
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  CEP: string;
  idCandidato: Candidatos;
}
