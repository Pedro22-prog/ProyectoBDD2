import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Driver } from './entities/driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectModel(Driver.name)
    private readonly driverModel: Model<Driver>,
  ) {}

  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    const newDriver = new this.driverModel(createDriverDto);
    return newDriver.save();
  }

  findAll(): Promise<Driver[]> {
    return this.driverModel.find().exec();
  }

  async findOne(id: string): Promise<Driver> {
    const driver = await this.driverModel.findById(id).exec();
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
  }

  async update(id: string, updateDriverDto: UpdateDriverDto): Promise<Driver> {
    const updatedDriver = await this.driverModel
      .findByIdAndUpdate(id, updateDriverDto, { new: true })
      .exec();
    if (!updatedDriver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return updatedDriver;
  }

  async remove(id: string): Promise<void> {
    const result = await this.driverModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
  }
}