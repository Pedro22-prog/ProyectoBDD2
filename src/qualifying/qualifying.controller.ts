import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QualifyingService } from './qualifying.service';
import { CreateQualifyingDto } from './dto/create-qualifying.dto';
import { UpdateQualifyingDto } from './dto/update-qualifying.dto';

@Controller('qualifying')
export class QualifyingController {
  constructor(private readonly qualifyingService: QualifyingService) {}

  @Post()
  async create(@Body() createQualifyingDto: CreateQualifyingDto) {
    return await this.qualifyingService.create(createQualifyingDto);
  }

  @Get()
  async findAll() {
    return await this.qualifyingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.qualifyingService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQualifyingDto: UpdateQualifyingDto,
  ) {
    return await this.qualifyingService.update(id, updateQualifyingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.qualifyingService.remove(id);
    return { message: `Qualifying with ID ${id} has been removed.` };
  }
}
