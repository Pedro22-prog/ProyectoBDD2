import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DriverStandings } from './entities/driver_standing.entity';
import { CreateDriverStandingsDto } from './dto/create-driver_standing.dto';
import { UpdateDriverStandingsDto } from './dto/update-driver_standing.dto';

@Injectable()
export class DriverStandingsService {
  constructor(
    @InjectModel(DriverStandings.name)
    private readonly driverStandingsModel: Model<DriverStandings>,
  ) {}

  async create(
    createDriverStandingsDto: CreateDriverStandingsDto,
  ): Promise<DriverStandings> {
    const newDriverStandings = new this.driverStandingsModel(createDriverStandingsDto);
    return newDriverStandings.save();
  }

  findAll(): Promise<DriverStandings[]> {
    return this.driverStandingsModel.find().exec();
  }

  async findOne(id: string): Promise<DriverStandings> {
    const driverStandings = await this.driverStandingsModel.findById(id).exec();
    if (!driverStandings) {
      throw new NotFoundException(`Driver Standings with ID ${id} not found`);
    }
    return driverStandings;
  }

  async update(
    id: string,
    updateDriverStandingsDto: UpdateDriverStandingsDto,
  ): Promise<DriverStandings> {
    const updatedDriverStandings = await this.driverStandingsModel
      .findByIdAndUpdate(id, updateDriverStandingsDto, { new: true })
      .exec();
    if (!updatedDriverStandings) {
      throw new NotFoundException(`Driver Standings with ID ${id} not found`);
    }
    return updatedDriverStandings;
  }

  async remove(id: string): Promise<void> {
    const result = await this.driverStandingsModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Driver Standings with ID ${id} not found`);
    }
  }
}
