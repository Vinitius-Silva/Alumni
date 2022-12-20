import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Emails {
  @PrimaryGeneratedColumn()
  idEmail?: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 50 })
  emailTp: string;

  @Column()
  emailPrincipal: number;

  @ManyToOne(() => Candidatos)
  idCandidato: Candidatos;
}
