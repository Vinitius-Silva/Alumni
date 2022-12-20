import { Module } from '@nestjs/common';
import { CandidatosService } from './candidatos.service';
import { CandidatosController } from './candidatos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { candidatosProviders } from './entities/candidato.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CandidatosController],
  providers: [...candidatosProviders, CandidatosService]
})
export class CandidatosModule {}
