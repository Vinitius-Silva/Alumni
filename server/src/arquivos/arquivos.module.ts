import { Module } from '@nestjs/common';
import { ArquivosService } from './arquivos.service';
import { ArquivosController } from './arquivos.controller';
import { arquivosProviders } from './entities/arquivo.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArquivosController],
  providers: [...arquivosProviders, ArquivosService]
})
export class ArquivosModule {}
