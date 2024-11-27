import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PitStop } from './entities/pit_stop.entity';
import { CreatePitStopDto } from './dto/create-pit_stop.dto';
import { UpdatePitStopDto } from './dto/update-pit_stop.dto';

@Injectable()
export class PitStopService {
  constructor(
    @InjectModel(PitStop.name)
    private readonly pitStopModel: Model<PitStop>,
  ) {}

  async create(createPitStopDto: CreatePitStopDto): Promise<PitStop> {
    const newPitStop = new this.pitStopModel(createPitStopDto);
    return newPitStop.save();
  }

  findAll(): Promise<PitStop[]> {
    return this.pitStopModel.find().exec();
  }

  async findOne(id: string): Promise<PitStop> {
    const pitStop = await this.pitStopModel.findById(id).exec();
    if (!pitStop) {
      throw new NotFoundException(`PitStop with ID ${id} not found`);
    }
    return pitStop;
  }

  async update(id: string, updatePitStopDto: UpdatePitStopDto): Promise<PitStop> {
    const updatedPitStop = await this.pitStopModel
      .findByIdAndUpdate(id, updatePitStopDto, { new: true })
      .exec();
    if (!updatedPitStop) {
      throw new NotFoundException(`PitStop with ID ${id} not found`);
    }
    return updatedPitStop;
  }

  async remove(id: string): Promise<void> {
    const result = await this.pitStopModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`PitStop with ID ${id} not found`);
    }
  }
}