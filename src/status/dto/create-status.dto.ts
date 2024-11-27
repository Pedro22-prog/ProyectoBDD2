import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateStatusDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  statusId: number;

  @ApiProperty({ example: 'Finished' })
  @IsString()
  status: string;
}