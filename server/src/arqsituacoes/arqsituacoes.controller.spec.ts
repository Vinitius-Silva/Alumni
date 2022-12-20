import { Test, TestingModule } from '@nestjs/testing';
import { ArqsituacoesController } from './arqsituacoes.controller';
import { ArqsituacoesService } from './arqsituacoes.service';

describe('ArqsituacoesController', () => {
  let controller: ArqsituacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArqsituacoesController],
      providers: [ArqsituacoesService],
    }).compile();

    controller = module.get<ArqsituacoesController>(ArqsituacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
