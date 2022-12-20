import { Candidatos } from 'src/candidatos/entities/candidato.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Enderecos {
  @PrimaryGeneratedColumn()
  idEndereco?: number;

  @Column({ length: 200 })
  endereco: string;

  @Column()
  numero: number;

  @Column({ length: 200 })
  complemento: string;

  @Column({ length: 50 })
  bairro: string;

  @Column({ length: 50 })
  cidade: string;

  @Column({ length: 2 })
  estado: string;

  @Column({ length: 50 })
  pais: string;

  @Column({ length: 8 })
  CEP: string;

  @ManyToOne(() => Candidatos)
  idCandidato: Candidatos;
}
