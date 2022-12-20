import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConcursosService } from './concursos.service';
import { CreateConcursoDto } from './dto/create-concurso.dto';
import { UpdateConcursoDto } from './dto/update-concurso.dto';

@Controller('concursos')
export class ConcursosController {
  constructor(private readonly concursosService: ConcursosService) {}

  @Post()
  create(@Body() createConcursoDto: CreateConcursoDto) {
    return this.concursosService.create(createConcursoDto);
  }

  @Get()
  findAll() {
    return this.concursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.concursosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConcursoDto: UpdateConcursoDto) {
    return this.concursosService.update(+id, updateConcursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concursosService.remove(+id);
  }
}
