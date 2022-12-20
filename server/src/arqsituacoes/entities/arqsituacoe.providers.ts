import { DataSource } from 'typeorm';
import { Arqsituacoes } from './arqsituacoe.entity';

export const arqsituacoesProviders = [
  {
    provide: 'ARQSITUACOES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Arqsituacoes),
    inject: ['DATA_SOURCE'],
  },
];
