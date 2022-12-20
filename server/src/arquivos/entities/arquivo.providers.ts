import { DataSource } from 'typeorm';
import { Arquivos } from './arquivo.entity';

export const arquivosProviders = [
  {
    provide: 'ARQUIVOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Arquivos),
    inject: ['DATA_SOURCE'],
  },
];
