import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCandidatoDto } from './dto/create-candidato.dto';
import { UpdateCandidatoDto } from './dto/update-candidato.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Candidatos } from './entities/candidato.entity';

@Injectable()
export class CandidatosService {
  constructor(
    @Inject('CANDIDATOS_REPOSITORY')
    private candidatosRepository: Repository<Candidatos>,
  ) {}

  async findAll(): Promise<Candidatos[]> {
    return this.candidatosRepository.find();
  }

  async findOne(id: number): Promise<Candidatos> {
    return this.candidatosRepository.findOneBy({ idCandidato: id });
  }

  async create(dado: CreateCandidatoDto): Promise<ResultadoDto> {
    const bdTabela = new Candidatos();
    bdTabela.nome = dado.nome;
    bdTabela.nomePai = dado.nomePai;
    bdTabela.nomeMae = dado.nomeMae;
    bdTabela.dtNasc = dado.dtNasc;
    bdTabela.sexo = dado.sexo;
    bdTabela.escolaridade = dado.escolaridade;
    bdTabela.estadoCivil = dado.estadoCivil;
    bdTabela.naturalidade = dado.naturalidade;
    bdTabela.natEstado = dado.natEstado;
    bdTabela.raca = dado.raca;
    bdTabela.idConcurso = dado.idConcurso;
    return this.candidatosRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Candidato cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o candidato!',
        };
      });
  }

  async update(id: number, dado: UpdateCandidatoDto): Promise<ResultadoDto> {
    return this.candidatosRepository
      .update({ idCandidato: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Candidato atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o candidato!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.candidatosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Candidato deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o candidato!',
        };
      });
  }
}
