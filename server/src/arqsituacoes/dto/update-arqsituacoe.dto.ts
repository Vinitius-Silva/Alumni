import { PartialType } from '@nestjs/mapped-types';
import { CreateArqsituacoeDto } from './create-arqsituacoe.dto';

export class UpdateArqsituacoeDto extends PartialType(CreateArqsituacoeDto) {}
