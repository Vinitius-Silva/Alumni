import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateArqsituacoeDto } from './dto/create-arqsituacoe.dto';
import { UpdateArqsituacoeDto } from './dto/update-arqsituacoe.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Arqsituacoes } from './entities/arqsituacoe.entity';

@Injectable()
export class ArqsituacoesService {
  constructor(
    @Inject('ARQSITUACOES_REPOSITORY')
    private arqsituacoesRepository: Repository<Arqsituacoes>,
  ) {}

  async findAll(): Promise<Arqsituacoes[]> {
    return this.arqsituacoesRepository.find();
  }

  async findOne(id: number): Promise<Arqsituacoes> {
    return this.arqsituacoesRepository.findOneBy({ idArqSituacao: id });
  }

  async create(dado: CreateArqsituacoeDto): Promise<ResultadoDto> {
    const bdTabela = new Arqsituacoes();
    bdTabela.ArqSituacao = dado.ArqSituacao;
    return this.arqsituacoesRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Situação do arquivo cadastrada com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar a situação do arquivo!',
        };
      });
  }

  async update(id: number, dado: UpdateArqsituacoeDto): Promise<ResultadoDto> {
    return this.arqsituacoesRepository
      .update({ idArqSituacao: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Situação do arquivo atualizada com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar a situação do arquivo!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.arqsituacoesRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Situação do arquivo deletada com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar a situação do arquivo!',
        };
      });
  }
}
