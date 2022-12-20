import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Concursos {
  @PrimaryGeneratedColumn()
  idConcurso?: number;

  @Column({ length: 100 })
  nome: string;

  @OneToMany(() => Candidatos, (Candidatos) => Candidatos.idCandidato)
  Candidatos: Candidatos[];
}
