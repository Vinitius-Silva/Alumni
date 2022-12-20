import { Module } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { DocumentosController } from './documentos.controller';
import { documentosProviders } from './entities/documento.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocumentosController],
  providers: [...documentosProviders, DocumentosService]
})
export class DocumentosModule {}
