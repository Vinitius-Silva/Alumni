import { Test, TestingModule } from '@nestjs/testing';
import { ArqsituacoesService } from './arqsituacoes.service';

describe('ArqsituacoesService', () => {
  let service: ArqsituacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArqsituacoesService],
    }).compile();

    service = module.get<ArqsituacoesService>(ArqsituacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
