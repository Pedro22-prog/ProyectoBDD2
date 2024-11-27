import { PartialType } from '@nestjs/mapped-types';
import { CreateSprintResultsDto } from './create-sprint_result.dto';

export class UpdateSprintResultsDto extends PartialType(CreateSprintResultsDto) {}