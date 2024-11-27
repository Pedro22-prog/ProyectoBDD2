import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateConstructorResultDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  constructorId: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  constructorResultsId: number;

  @ApiProperty({ example: 25 })
  @IsInt()
  points: number;

  @ApiProperty({ example: 5 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 'Finished' })
  @IsString()
  status: string;
}
