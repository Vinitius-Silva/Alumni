import { DataSource } from 'typeorm';
import { Enderecos } from './endereco.entity';

export const enderecosProviders = [
  {
    provide: 'ENDERECOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Enderecos),
    inject: ['DATA_SOURCE'],
  },
];
