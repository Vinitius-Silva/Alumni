import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  idUsuario?: number;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 200 })
  nome: string;

  @Column()
  dtInclusao: Date;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  senha: string;
}
