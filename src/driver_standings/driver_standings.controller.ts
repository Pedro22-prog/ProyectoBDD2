import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverStandingsService } from './driver_standings.service';
import { CreateDriverStandingsDto } from './dto/create-driver_standing.dto';
import { UpdateDriverStandingsDto } from './dto/update-driver_standing.dto';

@Controller('driver-standings')
export class DriverStandingsController {
  constructor(private readonly driverStandingsService: DriverStandingsService) {}

  @Post()
  async create(@Body() createDriverStandingsDto: CreateDriverStandingsDto) {
    return await this.driverStandingsService.create(createDriverStandingsDto);
  }

  @Get()
  async findAll() {
    return await this.driverStandingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.driverStandingsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDriverStandingsDto: UpdateDriverStandingsDto,
  ) {
    return await this.driverStandingsService.update(id, updateDriverStandingsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.driverStandingsService.remove(id);
    return { message: `Driver Standings with ID ${id} has been removed.` };
  }
}
