import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateConcursoDto } from './dto/create-concurso.dto';
import { UpdateConcursoDto } from './dto/update-concurso.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Concursos } from './entities/concurso.entity';

@Injectable()
export class ConcursosService {
  constructor(
    @Inject('CONCURSOS_REPOSITORY')
    private concursosRepository: Repository<Concursos>,
  ) {}

  async findAll(): Promise<Concursos[]> {
    return this.concursosRepository.find();
  }

  async findOne(id: number): Promise<Concursos> {
    return this.concursosRepository.findOneBy({ idConcurso: id });
  }

  async create(dado: CreateConcursoDto): Promise<ResultadoDto> {
    const bdTabela = new Concursos();
    bdTabela.nome = dado.nome;
    return this.concursosRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Concurso cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o concurso!',
        };
      });
  }

  async update(id: number, dado: UpdateConcursoDto): Promise<ResultadoDto> {
    return this.concursosRepository
      .update({ idConcurso: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Concurso atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o concurso!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.concursosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Concurso deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o concurso!',
        };
      });
  }
}
