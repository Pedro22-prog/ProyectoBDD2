import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SprintResultsService } from './sprint_results.service';
import { CreateSprintResultsDto } from './dto/create-sprint_result.dto';
import { UpdateSprintResultsDto } from './dto/update-sprint_result.dto';


@Controller('sprint-results')
export class SprintResultsController {
  constructor(private readonly sprintResultsService: SprintResultsService) {}

  @Post()
  async create(@Body() createSprintResultsDto: CreateSprintResultsDto) {
    return await this.sprintResultsService.create(createSprintResultsDto);
  }

  @Get()
  async findAll() {
    return await this.sprintResultsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sprintResultsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSprintResultsDto: UpdateSprintResultsDto) {
    return await this.sprintResultsService.update(id, updateSprintResultsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.sprintResultsService.remove(id);
    return { message: `SprintResult with ID ${id} has been removed.` };
  }
}