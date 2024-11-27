import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Race } from './entities/race.entity';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';

@Injectable()
export class RaceService {
  constructor(
    @InjectModel(Race.name)
    private readonly raceModel: Model<Race>,
  ) {}

  async create(createRaceDto: CreateRaceDto): Promise<Race> {
    const newRace = new this.raceModel(createRaceDto);
    return newRace.save();
  }

  findAll(): Promise<Race[]> {
    return this.raceModel.find().exec();
  }

  async findOne(id: string): Promise<Race> {
    const race = await this.raceModel.findById(id).exec();
    if (!race) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }
    return race;
  }

  async update(id: string, updateRaceDto: UpdateRaceDto): Promise<Race> {
    const updatedRace = await this.raceModel
      .findByIdAndUpdate(id, updateRaceDto, { new: true })
      .exec();
    if (!updatedRace) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }
    return updatedRace;
  }

  async remove(id: string): Promise<void> {
    const result = await this.raceModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Race with ID ${id} not found`);
    }
  }
}