import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateQualifyingDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  qualifyId: number;

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
  position: number;

  @ApiProperty({ example: '1:26.572' })
  @IsString()
  q1: string;

  @ApiProperty({ example: '1:25.187' })
  @IsString()
  q2: string;

  @ApiProperty({ example: '1:26.714' })
  @IsString()
  q3: string;
}