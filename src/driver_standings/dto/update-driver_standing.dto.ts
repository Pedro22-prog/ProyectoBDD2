import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverStandingDto } from './create-driver_standing.dto';

export class UpdateDriverStandingDto extends PartialType(CreateDriverStandingDto) {}
