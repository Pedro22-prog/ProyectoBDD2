import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Qualifying } from './entities/qualifying.entity';
import { CreateQualifyingDto } from './dto/create-qualifying.dto';
import { UpdateQualifyingDto } from './dto/update-qualifying.dto';

@Injectable()
export class QualifyingService {
  constructor(
    @InjectModel(Qualifying.name)
    private readonly qualifyingModel: Model<Qualifying>,
  ) {}

  async create(createQualifyingDto: CreateQualifyingDto): Promise<Qualifying> {
    const newQualifying = new this.qualifyingModel(createQualifyingDto);
    return newQualifying.save();
  }

  findAll(): Promise<Qualifying[]> {
    return this.qualifyingModel.find().exec();
  }

  async findOne(id: string): Promise<Qualifying> {
    const qualifying = await this.qualifyingModel.findById(id).exec();
    if (!qualifying) {
      throw new NotFoundException(`Qualifying with ID ${id} not found`);
    }
    return qualifying;
  }

  async update(
    id: string,
    updateQualifyingDto: UpdateQualifyingDto,
  ): Promise<Qualifying> {
    const updatedQualifying = await this.qualifyingModel
      .findByIdAndUpdate(id, updateQualifyingDto, { new: true })
      .exec();
    if (!updatedQualifying) {
      throw new NotFoundException(`Qualifying with ID ${id} not found`);
    }
    return updatedQualifying;
  }

  async remove(id: string): Promise<void> {
    const result = await this.qualifyingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Qualifying with ID ${id} not found`);
    }
  }
}