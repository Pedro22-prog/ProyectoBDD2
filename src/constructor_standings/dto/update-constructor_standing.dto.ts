import { PartialType } from '@nestjs/mapped-types';
import { CreateConstructorStandingDto } from './create-constructor_standing.dto';
//import { CreateConstructorStandingDto } from './create-constructor-standing.dto';

export class UpdateConstructorStandingDto extends PartialType(
  CreateConstructorStandingDto,
) {}
