import { Module } from '@nestjs/common';
import { UsuariosCandidatosService } from './usuarios_candidatos.service';
import { UsuariosCandidatosController } from './usuarios_candidatos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usuarioscandidatosProviders } from './entities/usuarios_candidato.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosCandidatosController],
  providers: [...usuarioscandidatosProviders, UsuariosCandidatosService]
})
export class UsuariosCandidatosModule {}
