import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LapTime } from './entities/lap_time.entity';
import { CreateLapTimeDto } from './dto/create-lap_time.dto';
import { UpdateLapTimeDto } from './dto/update-lap_time.dto';

@Injectable()
export class LapTimeService {
  constructor(
    @InjectModel(LapTime.name)
    private readonly lapTimeModel: Model<LapTime>,
  ) {}

  async create(createLapTimeDto: CreateLapTimeDto): Promise<LapTime> {
    const newLapTime = new this.lapTimeModel(createLapTimeDto);
    return newLapTime.save();
  }

  findAll(): Promise<LapTime[]> {
    return this.lapTimeModel.find().exec();
  }

  async findOne(id: string): Promise<LapTime> {
    const lapTime = await this.lapTimeModel.findById(id).exec();
    if (!lapTime) {
      throw new NotFoundException(`LapTime with ID ${id} not found`);
    }
    return lapTime;
  }

  async update(id: string, updateLapTimeDto: UpdateLapTimeDto): Promise<LapTime> {
    const updatedLapTime = await this.lapTimeModel
      .findByIdAndUpdate(id, updateLapTimeDto, { new: true })
      .exec();
    if (!updatedLapTime) {
      throw new NotFoundException(`LapTime with ID ${id} not found`);
    }
    return updatedLapTime;
  }

  async remove(id: string): Promise<void> {
    const result = await this.lapTimeModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`LapTime with ID ${id} not found`);
    }
  }
}