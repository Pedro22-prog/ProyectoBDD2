import { PartialType } from '@nestjs/mapped-types';
import { CreateLapTimeDto } from './create-lap_time.dto';

export class UpdateLapTimeDto extends PartialType(CreateLapTimeDto) {}
