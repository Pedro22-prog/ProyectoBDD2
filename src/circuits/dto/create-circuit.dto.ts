import { ApiProperty } from "@nestjs/swagger";
import { isNumber, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCircuitDto {
    @ApiProperty({example: 1})
    @IsNumber()
    circuitId: number;
    
    @ApiProperty({example: "albert_park"})
    @IsString()
    circuitRef: string;
    
    @ApiProperty({example: "Albert Park Grand Prix Circuit"})
    @IsString()
    name: string;
    
    @ApiProperty({example: "Melbourne"})
    @IsString()
    location: string;
    
    @ApiProperty({example: "Australia"})
    @IsString()
    country: string;
    
    @ApiProperty({example: "-37.8497"})
    @IsString()
    lat: string;
    
    @ApiProperty({example: "144.968"})
    @IsString()
    lng: string;
    
    @ApiProperty({example: 10})
    @IsNumber()
    alt: number;

    @ApiProperty({example: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit"})
    @IsString()
    @IsOptional()
    url: string;
}