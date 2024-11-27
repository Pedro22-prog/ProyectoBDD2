import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LapTimeService } from './lap_times.service';
import { CreateLapTimeDto } from './dto/create-lap_time.dto';
import { UpdateLapTimeDto } from './dto/update-lap_time.dto';

@Controller('lap-times')
export class LapTimeController {
  constructor(private readonly lapTimeService: LapTimeService) {}

  @Post()
  async create(@Body() createLapTimeDto: CreateLapTimeDto) {
    return await this.lapTimeService.create(createLapTimeDto);
  }

  @Get()
  async findAll() {
    return await this.lapTimeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lapTimeService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLapTimeDto: UpdateLapTimeDto,
  ) {
    return await this.lapTimeService.update(id, updateLapTimeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.lapTimeService.remove(id);
    return { message: `LapTime with ID ${id} has been removed.` };
  }
}
