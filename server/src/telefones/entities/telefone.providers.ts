import { DataSource } from 'typeorm';
import { Telefones } from './telefone.entity';

export const telefonesProviders = [
  {
    provide: 'TELEFONES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Telefones),
    inject: ['DATA_SOURCE'],
  },
];
