import { DataSource } from 'typeorm';
import { Documentos } from './documento.entity';

export const documentosProviders = [
  {
    provide: 'DOCUMENTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Documentos),
    inject: ['DATA_SOURCE'],
  },
];
