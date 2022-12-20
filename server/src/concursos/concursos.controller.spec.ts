import { Test, TestingModule } from '@nestjs/testing';
import { ConcursosController } from './concursos.controller';
import { ConcursosService } from './concursos.service';

describe('ConcursosController', () => {
  let controller: ConcursosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcursosController],
      providers: [ConcursosService],
    }).compile();

    controller = module.get<ConcursosController>(ConcursosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
