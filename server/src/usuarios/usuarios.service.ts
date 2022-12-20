import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Usuarios } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  async findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: string): Promise<Usuarios | undefined> {
    return this.usuariosRepository.findOneBy({ cpf: id });
  }

  async create(dado: CreateUsuarioDto): Promise<ResultadoDto> {
    const usuario = new Usuarios();
    usuario.cpf = dado.cpf;
    usuario.email = dado.email;
    usuario.nome = dado.nome;
    usuario.senha = bcrypt.hashSync(dado.senha, 10);
    return this.usuariosRepository
      .save(usuario)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Usuário cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o usuário!',
        };
      });
  }

  async update(id: number, dado: UpdateUsuarioDto): Promise<ResultadoDto> {
    const usuario = new Usuarios();
    usuario.cpf = dado.cpf;
    usuario.email = dado.email;
    usuario.nome = dado.nome;
    usuario.senha = bcrypt.hashSync(dado.senha, 10);
    return this.usuariosRepository
      .update({ idUsuario: id }, usuario)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Usuário atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o usuário!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.usuariosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Usuário deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o usuário!',
        };
      });
  }
}
