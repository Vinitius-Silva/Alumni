import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Telefones } from './entities/telefone.entity';

@Injectable()
export class TelefonesService {
  constructor(
    @Inject('TELEFONES_REPOSITORY')
    private telefonesRepository: Repository<Telefones>,
  ) {}

  async findAll(): Promise<Telefones[]> {
    return this.telefonesRepository.find();
  }

  async findOne(id: number): Promise<Telefones> {
    return this.telefonesRepository.findOneBy({ idTelefone: id });
  }

  async create(dado: CreateTelefoneDto): Promise<ResultadoDto> {
    const bdTabela = new Telefones();
    bdTabela.telefone = dado.telefone;
    bdTabela.telefoneTp = dado.telefoneTp;
    bdTabela.idCandidato = dado.idCandidato;
    return this.telefonesRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Telefone cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o telefone!',
        };
      });
  }

  async update(id: number, dado: UpdateTelefoneDto): Promise<ResultadoDto> {
    return this.telefonesRepository
      .update({ idTelefone: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Telefone atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o telefone!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.telefonesRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Telefone deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o telefone!',
        };
      });
  }
}
