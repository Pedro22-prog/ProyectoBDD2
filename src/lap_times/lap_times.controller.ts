import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LapTimesService } from './lap_times.service';
import { CreateLapTimeDto } from './dto/create-lap_time.dto';
import { UpdateLapTimeDto } from './dto/update-lap_time.dto';

@Controller('lap-times')
export class LapTimesController {
  constructor(private readonly lapTimesService: LapTimesService) {}

  @Post()
  create(@Body() createLapTimeDto: CreateLapTimeDto) {
    return this.lapTimesService.create(createLapTimeDto);
  }

  @Get()
  findAll() {
    return this.lapTimesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lapTimesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLapTimeDto: UpdateLapTimeDto) {
    return this.lapTimesService.update(+id, updateLapTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lapTimesService.remove(+id);
  }
}
