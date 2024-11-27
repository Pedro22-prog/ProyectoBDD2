import { PartialType } from '@nestjs/mapped-types';
import { CreateResultsDto } from './create-result.dto';

export class UpdateResultsDto extends PartialType(CreateResultsDto) {}