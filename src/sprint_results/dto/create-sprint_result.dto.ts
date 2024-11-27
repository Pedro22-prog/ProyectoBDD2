import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateSprintResultsDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  resultId: number;

  @ApiProperty({ example: 1061 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 830 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 9 })
  @IsInt()
  constructorId: number;

  @ApiProperty({ example: 33 })
  @IsInt()
  number: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  grid: number;

  @ApiProperty({ example: '1' })
  @IsString()
  position: string;

  @ApiProperty({ example: '1' })
  @IsString()
  positionText: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  positionOrder: number;

  @ApiProperty({ example: 3 })
  @IsInt()
  points: number;

  @ApiProperty({ example: 17 })
  @IsInt()
  laps: number;

  @ApiProperty({ example: '25:38.426' })
  @IsString()
  time: string;

  @ApiProperty({ example: '1538426' })
  @IsString()
  milliseconds: string;

  @ApiProperty({ example: '14' })
  @IsString()
  fastestLap: string;

  @ApiProperty({ example: '1:30.013' })
  @IsString()
  fastestLapTime: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  statusId: number;
}