import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateConstructorStandingDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  constructorStandingsId: number;

  @ApiProperty({ example: 18 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  constructorId: number;

  @ApiProperty({ example: 14 })
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
