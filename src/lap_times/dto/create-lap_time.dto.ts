import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateLapTimeDto {
  @ApiProperty({ example: 841 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 20 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  lap: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  position: number;

  @ApiProperty({ example: '1:38.109' })
  @IsString()
  time: string;

  @ApiProperty({ example: 98109 })
  @IsInt()
  milliseconds: number;
}