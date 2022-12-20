import { Arqsituacoes } from 'src/arqsituacoes/entities/arqsituacoe.entity';
import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Arquivos {
  @PrimaryGeneratedColumn()
  idArquivo?: number;

  @Column({ length: 50 })
  tpArquivo: string;

  @Column()
  arquivoDtInclusao?: Date;

  @Column()
  arquivoDtAnalise?: Date;

  @Column({ length: 45 })
  exigencia: string;

  @ManyToOne(() => Arqsituacoes)
  idArqSituacao: Arqsituacoes;

  @ManyToOne(() => Candidatos)
  idCandidato: Candidatos;
}
