import { DataSource } from 'typeorm';
import { Concursos } from './concurso.entity';

export const concursosProviders = [
  {
    provide: 'CONCURSOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Concursos),
    inject: ['DATA_SOURCE'],
  },
];
