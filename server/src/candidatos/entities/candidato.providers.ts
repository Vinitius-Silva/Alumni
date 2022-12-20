import { DataSource } from 'typeorm';
import { Candidatos } from './candidato.entity';

export const candidatosProviders = [
  {
    provide: 'CANDIDATOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Candidatos),
    inject: ['DATA_SOURCE'],
  },
];
