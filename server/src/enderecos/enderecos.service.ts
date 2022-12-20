import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Enderecos } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @Inject('ENDERECOS_REPOSITORY')
    private enderecosRepository: Repository<Enderecos>,
  ) {}

  async findAll(): Promise<Enderecos[]> {
    return this.enderecosRepository.find();
  }

  async findOne(id: number): Promise<Enderecos> {
    return this.enderecosRepository.findOneBy({ idEndereco: id });
  }

  async create(dado: CreateEnderecoDto): Promise<ResultadoDto> {
    const bdTabela = new Enderecos();
    bdTabela.endereco = dado.endereco;
    bdTabela.numero = dado.numero;
    bdTabela.complemento = dado.complemento;
    bdTabela.bairro = dado.bairro;
    bdTabela.cidade = dado.cidade;
    bdTabela.estado = dado.estado;
    bdTabela.pais = dado.pais;
    bdTabela.CEP = dado.CEP;
    bdTabela.idCandidato = dado.idCandidato;
    return this.enderecosRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Endereço cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o endereço!',
        };
      });
  }

  async update(id: number, dado: UpdateEnderecoDto): Promise<ResultadoDto> {
    return this.enderecosRepository
      .update({ idEndereco: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Endereço atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o endereço!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.enderecosRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'Endereço deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o endereço!',
        };
      });
  }
}
