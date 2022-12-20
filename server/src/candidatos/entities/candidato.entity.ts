import { Arquivos } from 'src/arquivos/entities/arquivo.entity';
import { Concursos } from 'src/concursos/entities/concurso.entity';
import { Documentos } from 'src/documentos/entities/documento.entity';
import { Emails } from 'src/emails/entities/email.entity';
import { Enderecos } from 'src/enderecos/entities/endereco.entity';
import { Telefones } from 'src/telefones/entities/telefone.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';

@Entity()
export class Candidatos {
  @PrimaryGeneratedColumn()
  idCandidato?: number;

  @Column({ length: 200 })
  nome: string;

  @Column({ length: 200 })
  nomePai: string;

  @Column({ length: 200 })
  nomeMae: string;

  @Column()
  dtNasc: Date;

  @Column({ length: 10 })
  sexo: string;

  @Column({ length: 20 })
  escolaridade: string;

  @Column({ length: 20 })
  estadoCivil: string;

  @Column({ length: 20 })
  naturalidade: string;

  @Column({ length: 2 })
  natEstado: string;

  @Column({ length: 10 })
  raca: string;

  @OneToMany(() => Arquivos, (Arquivos) => Arquivos.idArquivo)
  Arquivos: Arquivos[];

  @ManyToOne(() => Concursos)
  idConcurso: Concursos;

  @OneToMany(() => Telefones, (Telefones) => Telefones.idTelefone)
  Telefones: Telefones[];

  @OneToMany(() => Enderecos, (Enderecos) => Enderecos.idEndereco)
  Enderecos: Enderecos[];

  @OneToMany(() => Emails, (Emails) => Emails.idEmail)
  Emails: Emails[];

  @OneToMany(() => Documentos, (Documentos) => Documentos.idDocumento)
  Documentos: Documentos[];

  @ManyToMany(() => Usuarios)
  @JoinTable()
  Usuarios: Usuarios[];
}
