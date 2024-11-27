import { PartialType } from '@nestjs/mapped-types';
import { CreateConstructorResultDto } from './create-constructor_result.dto';

export class UpdateConstructorResultDto extends PartialType(CreateConstructorResultDto) {}
