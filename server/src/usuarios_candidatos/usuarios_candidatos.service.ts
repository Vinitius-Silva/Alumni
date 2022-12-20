import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUsuariosCandidatoDto } from './dto/create-usuarios_candidato.dto';
import { UpdateUsuariosCandidatoDto } from './dto/update-usuarios_candidato.dto';
import { UsuariosCandidatos } from './entities/usuarios_candidato.entity';

@Injectable()
export class UsuariosCandidatosService {
  constructor(
    @Inject('USUARIOS_CANDIDATOS_REPOSITORY')
    private usuarioscandidatosRepository: Repository<UsuariosCandidatos>,
  ) {}

  create(createUsuariosCandidatoDto: CreateUsuariosCandidatoDto) {
    return 'This action adds a new usuariosCandidato';
  }

  findAll() {
    return `This action returns all usuariosCandidatos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosCandidato`;
  }

  update(id: number, updateUsuariosCandidatoDto: UpdateUsuariosCandidatoDto) {
    return `This action updates a #${id} usuariosCandidato`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosCandidato`;
  }
}
