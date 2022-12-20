import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosCandidatosController } from './usuarios_candidatos.controller';
import { UsuariosCandidatosService } from './usuarios_candidatos.service';

describe('UsuariosCandidatosController', () => {
  let controller: UsuariosCandidatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosCandidatosController],
      providers: [UsuariosCandidatosService],
    }).compile();

    controller = module.get<UsuariosCandidatosController>(UsuariosCandidatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
