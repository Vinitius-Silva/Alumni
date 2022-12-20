import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { EnderecosController } from './enderecos.controller';
import { DatabaseModule } from 'src/database/database.module';
import { enderecosProviders } from './entities/endereco.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EnderecosController],
  providers: [...enderecosProviders, EnderecosService]
})
export class EnderecosModule {}
