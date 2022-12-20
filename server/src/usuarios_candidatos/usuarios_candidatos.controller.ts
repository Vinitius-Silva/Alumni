import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosCandidatosService } from './usuarios_candidatos.service';
import { CreateUsuariosCandidatoDto } from './dto/create-usuarios_candidato.dto';
import { UpdateUsuariosCandidatoDto } from './dto/update-usuarios_candidato.dto';

@Controller('usuarios-candidatos')
export class UsuariosCandidatosController {
  constructor(private readonly usuariosCandidatosService: UsuariosCandidatosService) {}

  @Post()
  create(@Body() createUsuariosCandidatoDto: CreateUsuariosCandidatoDto) {
    return this.usuariosCandidatosService.create(createUsuariosCandidatoDto);
  }

  @Get()
  findAll() {
    return this.usuariosCandidatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosCandidatosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosCandidatoDto: UpdateUsuariosCandidatoDto) {
    return this.usuariosCandidatosService.update(+id, updateUsuariosCandidatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosCandidatosService.remove(+id);
  }
}
