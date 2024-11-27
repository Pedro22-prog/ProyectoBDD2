import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SprintResults } from './entities/sprint_result.entity';
import { CreateSprintResultsDto } from './dto/create-sprint_result.dto';

import { UpdateSprintResultsDto } from './dto/update-sprint_result.dto';

@Injectable()
export class SprintResultsService {
  constructor(
    @InjectModel(SprintResults.name)
    private readonly sprintResultsModel: Model<SprintResults>,
  ) {}

  async create(createSprintResultsDto: CreateSprintResultsDto): Promise<SprintResults> {
    const newSprintResult = new this.sprintResultsModel(createSprintResultsDto);
    return newSprintResult.save();
  }

  findAll(): Promise<SprintResults[]> {
    return this.sprintResultsModel.find().exec();
  }

  async findOne(id: string): Promise<SprintResults> {
    const sprintResult = await this.sprintResultsModel.findById(id).exec();
    if (!sprintResult) {
      throw new NotFoundException(`SprintResult with ID ${id} not found`);
    }
    return sprintResult;
  }

  async update(id: string, updateSprintResultsDto: UpdateSprintResultsDto): Promise<SprintResults> {
    const updatedSprintResult = await this.sprintResultsModel
      .findByIdAndUpdate(id, updateSprintResultsDto, { new: true })
      .exec();
    if (!updatedSprintResult) {
      throw new NotFoundException(`SprintResult with ID ${id} not found`);
    }
    return updatedSprintResult;
  }

  async remove(id: string): Promise<void> {
    const result = await this.sprintResultsModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`SprintResult with ID ${id} not found`);
    }
  }
}