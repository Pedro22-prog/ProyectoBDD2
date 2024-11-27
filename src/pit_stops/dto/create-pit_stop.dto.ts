import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreatePitStopDto {
  @ApiProperty({ example: 841 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 153 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  stop: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  lap: number;

  @ApiProperty({ example: '17:05:23' })
  @IsString()
  time: string;

  @ApiProperty({ example: 26 })
  @IsInt()
  duration: number;

  @ApiProperty({ example: 26898 })
  @IsInt()
  milliseconds: number;
}