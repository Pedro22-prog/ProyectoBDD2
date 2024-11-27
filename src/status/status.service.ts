import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Status } from './entities/status.entity';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status.name) private readonly statusModel: Model<Status>,
  ) {}

  async create(createStatusDto: CreateStatusDto): Promise<Status> {
    const newStatus = new this.statusModel(createStatusDto);
    return newStatus.save();
  }

  findAll(): Promise<Status[]> {
    return this.statusModel.find().exec();
  }

  async findOne(id: number): Promise<Status> {
    const status = await this.statusModel.findById(id).exec();
    if (!status) {
      throw new NotFoundException(`Status with ID ${id} not found`);
    }
    return status;
  }

  async update(
    id: number,
    updateStatusDto: UpdateStatusDto,
  ): Promise<Status> {
    const updatedStatus = await this.statusModel
      .findByIdAndUpdate(id, updateStatusDto, { new: true })
      .exec();
    if (!updatedStatus) {
      throw new NotFoundException(`Status with ID ${id} not found`);
    }
    return updatedStatus;
  }

  async remove(id: number): Promise<void> {
    const result = await this.statusModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Status with ID ${id} not found`);
    }
  }
}