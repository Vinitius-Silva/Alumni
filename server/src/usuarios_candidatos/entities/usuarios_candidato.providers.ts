import { DataSource } from 'typeorm';
import { UsuariosCandidatos } from './usuarios_candidato.entity';

export const usuarioscandidatosProviders = [
  {
    provide: 'USUARIOS_CANDIDATOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsuariosCandidatos),
    inject: ['DATA_SOURCE'],
  },
];
