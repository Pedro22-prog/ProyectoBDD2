import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstructorStandingsService } from './constructor_standings.service';
import { CreateConstructorStandingDto } from './dto/create-constructor_standing.dto';
import { UpdateConstructorStandingDto } from './dto/update-constructor_standing.dto';

@Controller('constructor-standings')
export class ConstructorStandingsController {
  constructor(private readonly constructorStandingsService: ConstructorStandingsService) {}

  @Post()
  create(@Body() createConstructorStandingDto: CreateConstructorStandingDto) {
    return this.constructorStandingsService.create(createConstructorStandingDto);
  }

  @Get()
  findAll() {
    return this.constructorStandingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.constructorStandingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstructorStandingDto: UpdateConstructorStandingDto) {
    return this.constructorStandingsService.update(+id, updateConstructorStandingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constructorStandingsService.remove(+id);
  }
}
