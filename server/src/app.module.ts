import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArqsituacoesModule } from './arqsituacoes/arqsituacoes.module';
import { ArquivosModule } from './arquivos/arquivos.module';
import { CandidatosModule } from './candidatos/candidatos.module';
import { ConcursosModule } from './concursos/concursos.module';
import { DocumentosModule } from './documentos/documentos.module';
import { EmailsModule } from './emails/emails.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { TelefonesModule } from './telefones/telefones.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosCandidatosModule } from './usuarios_candidatos/usuarios_candidatos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ArqsituacoesModule, ArquivosModule, CandidatosModule, ConcursosModule, DocumentosModule, EmailsModule, EnderecosModule, TelefonesModule, UsuariosCandidatosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
