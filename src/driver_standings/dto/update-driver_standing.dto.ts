import { PartialType } from '@nestjs/mapped-types';
import { CreateDriverStandingsDto } from './create-driver_standing.dto';

export class UpdateDriverStandingsDto extends PartialType(CreateDriverStandingsDto) {}
