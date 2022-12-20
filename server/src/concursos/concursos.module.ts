import { Module } from '@nestjs/common';
import { ConcursosService } from './concursos.service';
import { ConcursosController } from './concursos.controller';
import { concursosProviders } from './entities/concurso.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ConcursosController],
  providers: [...concursosProviders, ConcursosService]
})
export class ConcursosModule {}
