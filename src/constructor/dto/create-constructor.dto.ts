import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUrl } from 'class-validator';

export class CreateConstructorDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  constructorId: number;

  @ApiProperty({ example: 'mclaren' })
  @IsString()
  constructorRef: string;

  @ApiProperty({ example: 'McLaren' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'British' })
  @IsString()
  nationality: string;

  @ApiProperty({ example: 'http://en.wikipedia.org/wiki/McLaren' })
  @IsUrl()
  url: string;
}
