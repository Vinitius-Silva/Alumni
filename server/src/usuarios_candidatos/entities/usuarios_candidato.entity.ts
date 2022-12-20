import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuariosCandidatos {
  @PrimaryGeneratedColumn()
  Usuarios_idUsuario: number;

  @Column()
  Candidatos_idCandidato: number;
}
