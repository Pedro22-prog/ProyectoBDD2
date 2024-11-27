import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Results } from './entities/result.entity';
import { CreateResultsDto } from './dto/create-result.dto';
import { UpdateResultsDto } from './dto/update-result.dto';
@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(Results.name)
    private readonly resultsModel: Model<Results>,
  ) {}

  async create(createResultsDto: CreateResultsDto): Promise<Results> {
    const newResult = new this.resultsModel(createResultsDto);
    return newResult.save();
  }

  findAll(): Promise<Results[]> {
    return this.resultsModel.find().exec();
  }

  async findOne(id: string): Promise<Results> {
    const result = await this.resultsModel.findById(id).exec();
    if (!result) {
      throw new NotFoundException(`Result with ID ${id} not found`);
    }
    return result;
  }

  async update(id: string, updateResultsDto: UpdateResultsDto): Promise<Results> {
    const updatedResult = await this.resultsModel
      .findByIdAndUpdate(id, updateResultsDto, { new: true })
      .exec();
    if (!updatedResult) {
      throw new NotFoundException(`Result with ID ${id} not found`);
    }
    return updatedResult;
  }

  async remove(id: string): Promise<void> {
    const result = await this.resultsModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Result with ID ${id} not found`);
    }
  }
}