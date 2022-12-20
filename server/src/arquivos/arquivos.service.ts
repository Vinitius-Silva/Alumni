import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateArquivoDto } from './dto/create-arquivo.dto';
import { UpdateArquivoDto } from './dto/update-arquivo.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Arquivos } from './entities/arquivo.entity';

@Injectable()
export class ArquivosService {
  constructor(
    @Inject('ARQUIVOS_REPOSITORY')
    private arquivosRepository: Repository<Arquivos>,
  ) {}

  async findAll(): Promise<Arquivos[]> {
    return this.arquivosRepository.find();
  }

  async findOne(id: number): Promise<Arquivos> {
    return this.arquivosRepository.findOneBy({ idArquivo: id });
  }

  async create(dado: CreateArquivoDto): Promise<ResultadoDto> {
    const bdTabela = new Arquivos();
    bdTabela.tpArquivo = dado.tpArquivo;
    bdTabela.exigencia = dado.exigencia;
    bdTabela.idArqSituacao = dado.idArqSituacao;
    bdTabela.idCandidato = dado.idCandidato;
    return this.arquivosRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Arquivo cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o Arquivo!',
        };
      });
  }

  async update(id: number, dado: UpdateArquivoDto): Promise<ResultadoDto> {
    return this.arquivosRepository
      .update({ idArquivo: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Arquivo atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o arquivo!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.arquivosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Arquivo deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o arquivo!',
        };
      });
  }
}
