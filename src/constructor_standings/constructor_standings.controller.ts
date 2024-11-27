import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateConstructorStandingDto } from './dto/update-constructor_standing.dto';
import { ConstructorStandingsService } from './constructor_standings.service';
import { CreateConstructorStandingDto } from './dto/create-constructor_standing.dto';

@Controller('constructor-standings')
export class ConstructorStandingsController {
  constructor(
    private readonly constructorStandingsService: ConstructorStandingsService,
  ) {}

  @Post()
  async create(
    @Body() createConstructorStandingDto: CreateConstructorStandingDto,
  ) {
    return await this.constructorStandingsService.create(
      createConstructorStandingDto,
    );
  }

  @Get()
  async findAll() {
    return await this.constructorStandingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.constructorStandingsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConstructorStandingDto: UpdateConstructorStandingDto,
  ) {
    return await this.constructorStandingsService.update(
      id,
      updateConstructorStandingDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.constructorStandingsService.remove(id);
    return { message: `ConstructorStanding with ID ${id} has been removed.` };
  }
}
