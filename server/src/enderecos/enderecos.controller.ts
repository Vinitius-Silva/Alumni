import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('enderecos')
export class EnderecosController {
  constructor(private readonly EnderecosService: EnderecosService) {}

  @Post()
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.EnderecosService.create(createEnderecoDto);
  }

  @Get()
  findAll() {
    return this.EnderecosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.EnderecosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.EnderecosService.update(+id, updateEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.EnderecosService.remove(+id);
  }
}
