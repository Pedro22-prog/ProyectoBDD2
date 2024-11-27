import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUrl } from 'class-validator';

export class CreateDriverDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  driverId: number;

  @ApiProperty({ example: 'hamilton' })
  @IsString()
  driverRef: string;

  @ApiProperty({ example: '44' })
  @IsString()
  number: string;

  @ApiProperty({ example: 'HAM' })
  @IsString()
  code: string;

  @ApiProperty({ example: 'Lewis' })
  @IsString()
  forename: string;

  @ApiProperty({ example: 'Hamilton' })
  @IsString()
  surname: string;

  @ApiProperty({ example: '1985-01-07' })
  @IsString()
  dob: string;

  @ApiProperty({ example: 'British' })
  @IsString()
  nationality: string;

  @ApiProperty({ example: 'http://en.wikipedia.org/wiki/Lewis_Hamilton' })
  @IsUrl()
  url: string;
}