import { Arquivos } from 'src/arquivos/entities/arquivo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Arqsituacoes {
  @PrimaryGeneratedColumn()
  idArqSituacao?: number;

  @Column()
  ArqSituacao: string;

  @OneToMany(() => Arquivos, (Arquivos) => Arquivos.idArquivo)
  Arquivos: Arquivos[];
}
