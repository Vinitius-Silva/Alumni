import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Telefones {
  @PrimaryGeneratedColumn()
  idTelefone?: number;

  @Column({ length: 11 })
  telefone: string;

  @Column({ length: 50 })
  telefoneTp: string;

  @ManyToOne(() => Candidatos)
  idCandidato: Candidatos;
}
