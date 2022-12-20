import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosCandidatoDto } from './create-usuarios_candidato.dto';

export class UpdateUsuariosCandidatoDto extends PartialType(CreateUsuariosCandidatoDto) {}
