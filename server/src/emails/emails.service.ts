import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { ResultadoDto } from '../dto/resultado.dto';
import { Emails } from './entities/email.entity';

@Injectable()
export class EmailsService {
  constructor(
    @Inject('EMAILS_REPOSITORY')
    private emailsRepository: Repository<Emails>,
  ) {}

  async findAll(): Promise<Emails[]> {
    return this.emailsRepository.find();
  }

  async findOne(id: number): Promise<Emails> {
    return this.emailsRepository.findOneBy({ idEmail: id });
  }

  async create(dado: CreateEmailDto): Promise<ResultadoDto> {
    const bdTabela = new Emails();
    bdTabela.email = dado.email;
    bdTabela.emailTp = dado.emailTp;
    bdTabela.emailPrincipal = dado.emailPrincipal;
    bdTabela.idCandidato = dado.idCandidato;
    return this.emailsRepository
      .save(bdTabela)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'E-mail cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao cadastrar o e-mail!',
        };
      });
  }

  async update(id: number, dado: UpdateEmailDto): Promise<ResultadoDto> {
    return this.emailsRepository
      .update({ idEmail: id }, dado)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'E-mail atualizado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao atualizar o e-mail!',
        };
      });
  }

  async remove(id: number): Promise<ResultadoDto> {
    return this.emailsRepository
      .delete(id)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: 'E-mail deletado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: 'Houve um erro ao deletar o e-mail!',
        };
      });
  }
}
