import { PartialType } from '@nestjs/mapped-types';
import { CreateConcursoDto } from './create-concurso.dto';

export class UpdateConcursoDto extends PartialType(CreateConcursoDto) {}
