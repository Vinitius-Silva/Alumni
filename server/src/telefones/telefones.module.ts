import { Module } from '@nestjs/common';
import { TelefonesService } from './telefones.service';
import { TelefonesController } from './telefones.controller';
import { DatabaseModule } from 'src/database/database.module';
import { telefonesProviders } from './entities/telefone.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TelefonesController],
  providers: [...telefonesProviders, TelefonesService]
})
export class TelefonesModule {}
