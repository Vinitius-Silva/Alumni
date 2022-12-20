import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Documentos {
  @PrimaryGeneratedColumn()
  idDocumento?: number;

  @Column({ length: 20 })
  rg: string;

  @Column({ length: 40 })
  rgEmissor: string;

  @Column()
  rgDtEmissao: Date;

  @Column({ length: 2 })
  rgEstEmissor: string;

  @Column({ length: 11 })
  cnh: string;

  @Column()
  cnhDtValidade: Date;

  @Column({ length: 2 })
  cnhCategoria: string;

  @ManyToOne(() => Candidatos)
  idCandidato: Candidatos;
}
