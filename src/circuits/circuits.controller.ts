import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CircuitsService } from './circuits.service';
import { CreateCircuitDto } from './dto/create-circuit.dto';
import { UpdateCircuitDto } from './dto/update-circuit.dto';

@Controller('circuits')
export class CircuitsController {
  constructor(private readonly circuitsService: CircuitsService) {}

  @Post()
  async create(@Body() createCircuitDto: CreateCircuitDto) {
    return await this.circuitsService.create(createCircuitDto);
  }

  @Get()
  async findAll() {
    return await this.circuitsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.circuitsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCircuitDto: UpdateCircuitDto,
  ) {
    return await this.circuitsService.update(id, updateCircuitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.circuitsService.remove(id);
    return { message: `Circuit with ID ${id} has been removed.` };
  }
}
