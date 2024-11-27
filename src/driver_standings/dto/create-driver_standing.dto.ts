import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateDriverStandingsDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  driverStandingsId: number;

  @ApiProperty({ example: 18 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 10 })
  @IsInt()
  points: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  position: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  positionText: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  wins: number;
}
