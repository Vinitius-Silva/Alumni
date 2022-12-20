import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Documentos } from './entities/documento.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @Inject('DOCUMENTOS_REPOSITORY')
    private documentosRepository: Repository<Documentos>,
  ) {}

  async findAll(): Promise<Documentos[]> {
    return this.documentosRepository.find();
  }

  async findOne(id: number): Promise<Documentos> {
    return this.documentosRepository.findOneBy({ idDocumento: id });
  }

  async create(dado: CreateDocumentoDto): Promise<ResultadoDto> {
    const bdTabela = new Documentos();
    bdTabela.rg = dado.rg;
    bdTabela.rgEmissor = dado.rgEmissor;
    bdTabela.rgDtEmissao = dado.rgDtEmissao;
    bdTabela.rgEstEmissor = dado.rgEstEmissor;
    bdTabela.cnh = dado.cnh;
    bdTabela.cnhDtValidade = dado.cnhDtValidade;
    bdTabela.cnhCategoria = dado.cnhCategoria;
    bdTabela.idCandidato = dado.idCandidato;
    return this.documentosRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Documento cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o Documento!',
        };
      });
  }

  async update(id: number, dado: UpdateDocumentoDto): Promise<ResultadoDto> {
    return this.documentosRepository
      .update({ idDocumento: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Documento atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o documento!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.documentosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Documento deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o documento!',
        };
      });
  }
}
