import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelefonesService } from './telefones.service';
import { CreateTelefoneDto } from './dto/create-telefone.dto';
import { UpdateTelefoneDto } from './dto/update-telefone.dto';

@Controller('telefones')
export class TelefonesController {
  constructor(private readonly telefonesService: TelefonesService) {}

  @Post()
  create(@Body() createTelefoneDto: CreateTelefoneDto) {
    return this.telefonesService.create(createTelefoneDto);
  }

  @Get()
  findAll() {
    return this.telefonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.telefonesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTelefoneDto: UpdateTelefoneDto) {
    return this.telefonesService.update(+id, updateTelefoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.telefonesService.remove(+id);
  }
}
