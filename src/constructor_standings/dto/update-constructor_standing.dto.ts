import { PartialType } from '@nestjs/mapped-types';
import { CreateConstructorStandingDto } from './create-constructor_standing.dto';

export class UpdateConstructorStandingDto extends PartialType(CreateConstructorStandingDto) {}
