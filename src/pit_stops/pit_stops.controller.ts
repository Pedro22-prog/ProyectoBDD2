import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PitStopService } from './pit_stops.service';
import { CreatePitStopDto } from './dto/create-pit_stop.dto';
import { UpdatePitStopDto } from './dto/update-pit_stop.dto';

@Controller('pit-stops')
export class PitStopController {
  constructor(private readonly pitStopService: PitStopService) {}

  @Post()
  async create(@Body() createPitStopDto: CreatePitStopDto) {
    return await this.pitStopService.create(createPitStopDto);
  }

  @Get()
  async findAll() {
    return await this.pitStopService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.pitStopService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePitStopDto: UpdatePitStopDto,
  ) {
    return await this.pitStopService.update(id, updatePitStopDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.pitStopService.remove(id);
    return { message: `PitStop with ID ${id} has been removed.` };
  }
}
