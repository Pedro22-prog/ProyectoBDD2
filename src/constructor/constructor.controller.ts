import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstructorService } from './constructor.service';
import { CreateConstructorDto } from './dto/create-constructor.dto';
import { UpdateConstructorDto } from './dto/update-constructor.dto';

@Controller('constructors')
export class ConstructorController {
  constructor(private readonly constructorService: ConstructorService) {}

  @Post()
  async create(@Body() createConstructorDto: CreateConstructorDto) {
    return await this.constructorService.create(createConstructorDto);
  }

  @Get()
  async findAll() {
    return await this.constructorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.constructorService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConstructorDto: UpdateConstructorDto,
  ) {
    return await this.constructorService.update(id, updateConstructorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.constructorService.remove(id);
    return { message: `Constructor with ID ${id} has been removed.` };
  }
}
