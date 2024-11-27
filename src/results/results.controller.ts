import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultsDto } from './dto/create-result.dto';
import { UpdateResultsDto } from './dto/update-result.dto';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  async create(@Body() createResultsDto: CreateResultsDto) {
    return await this.resultsService.create(createResultsDto);
  }

  @Get()
  async findAll() {
    return await this.resultsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.resultsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateResultsDto: UpdateResultsDto) {
    return await this.resultsService.update(id, updateResultsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.resultsService.remove(id);
    return { message: `Result with ID ${id} has been removed.` };
  }
}