import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaceService } from './races.service';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';

@Controller('races')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}

  @Post()
  async create(@Body() createRaceDto: CreateRaceDto) {
    return await this.raceService.create(createRaceDto);
  }

  @Get()
  async findAll() {
    return await this.raceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.raceService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRaceDto: UpdateRaceDto) {
    return await this.raceService.update(id, updateRaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.raceService.remove(id);
    return { message: `Race with ID ${id} has been removed.` };
  }
}