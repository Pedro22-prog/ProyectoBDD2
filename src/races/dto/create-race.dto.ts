import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateRaceDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  raceId: number;

  @ApiProperty({ example: 2009 })
  @IsInt()
  year: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  round: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  circuitId: number;

  @ApiProperty({ example: 'Australian Grand Prix' })
  @IsString()
  name: string;

  @ApiProperty({ example: '2009-03-29' })
  @IsString()
  date: string;

  @ApiProperty({ example: '06:00:00' })
  @IsString()
  time: string;

  @ApiProperty({ example: 'http://en.wikipedia.org/wiki/2009_Australian_Grand_Prix' })
  @IsString()
  url: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp1_date: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp1_time: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp2_date: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp2_time: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp3_date: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  fp3_time: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  quali_date: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  quali_time: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  sprint_date: string;

  @ApiProperty({ example: '\\N', required: false })
  @IsString()
  sprint_time: string;
}