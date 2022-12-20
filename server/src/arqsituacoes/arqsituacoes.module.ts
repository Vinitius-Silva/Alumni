import { Module } from '@nestjs/common';
import { ArqsituacoesService } from './arqsituacoes.service';
import { ArqsituacoesController } from './arqsituacoes.controller';
import { arqsituacoesProviders } from './entities/arqsituacoe.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArqsituacoesController],
  providers: [...arqsituacoesProviders, ArqsituacoesService],
})
export class ArqsituacoesModule {}
