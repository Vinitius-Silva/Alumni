import { DataSource } from 'typeorm';
import { Emails } from './email.entity';

export const emailsProviders = [
  {
    provide: 'EMAILS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Emails),
    inject: ['DATA_SOURCE'],
  },
];
