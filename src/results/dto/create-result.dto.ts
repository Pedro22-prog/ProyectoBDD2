import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateResultsDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  resultId: number;

  @ApiProperty({ example: 18 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  constructorId: number;

  @ApiProperty({ example: 22 })
  @IsInt()
  number: number;

  @ApiProperty({ example: 1 })
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

  @ApiProperty({ example: 10 })
  @IsInt()
  points: number;

  @ApiProperty({ example: 58 })
  @IsInt()
  laps: number;

  @ApiProperty({ example: '1:34:50.616' })
  @IsString()
  time: string;

  @ApiProperty({ example: '5690616' })
  @IsString()
  milliseconds: string;

  @ApiProperty({ example: '39' })
  @IsString()
  fastestLap: string;

  @ApiProperty({ example: '2' })
  @IsString()
  rank: string;

  @ApiProperty({ example: '1:27.452' })
  @IsString()
  fastestLapTime: string;

  @ApiProperty({ example: '218.300' })
  @IsString()
  fastestLapSpeed: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  statusId: number;
}