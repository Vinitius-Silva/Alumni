import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArqsituacoesService } from './arqsituacoes.service';
import { CreateArqsituacoeDto } from './dto/create-arqsituacoe.dto';
import { UpdateArqsituacoeDto } from './dto/update-arqsituacoe.dto';

@Controller('arqsituacoes')
export class ArqsituacoesController {
  constructor(private readonly arqsituacoesService: ArqsituacoesService) {}

  @Post()
  create(@Body() createArqsituacoeDto: CreateArqsituacoeDto) {
    return this.arqsituacoesService.create(createArqsituacoeDto);
  }

  @Get()
  findAll() {
    return this.arqsituacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arqsituacoesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateArqsituacoeDto: UpdateArqsituacoeDto,
  ) {
    return this.arqsituacoesService.update(+id, updateArqsituacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arqsituacoesService.remove(+id);
  }
}
