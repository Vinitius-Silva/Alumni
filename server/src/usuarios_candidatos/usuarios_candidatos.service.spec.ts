import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCandidatosService } from './usuarios_candidatos.service';

describe('UsuariosCandidatosService', () => {
  let service: UsuariosCandidatosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosCandidatosService],
    }).compile();

    service = module.get<UsuariosCandidatosService>(UsuariosCandidatosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
