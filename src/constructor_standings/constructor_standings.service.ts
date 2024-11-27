import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConstructorStanding } from './entities/constructor_standing.entity';
import { CreateConstructorStandingDto } from './dto/create-constructor_standing.dto';
import { UpdateConstructorStandingDto } from './dto/update-constructor_standing.dto';

@Injectable()
export class ConstructorStandingsService {
  constructor(
    @InjectModel(ConstructorStanding.name)
    private readonly constructorStandingModel: Model<ConstructorStanding>,
  ) {}

  async create(
    createConstructorStandingDto: CreateConstructorStandingDto,
  ): Promise<ConstructorStanding> {
    const newStanding = new this.constructorStandingModel(
      createConstructorStandingDto,
    );
    return newStanding.save();
  }

  findAll(): Promise<ConstructorStanding[]> {
    return this.constructorStandingModel.find().exec();
  }

  async findOne(id: string): Promise<ConstructorStanding> {
    const standing = await this.constructorStandingModel.findById(id).exec();
    if (!standing) {
      throw new NotFoundException(
        `ConstructorStanding with ID ${id} not found`,
      );
    }
    return standing;
  }

  async update(
    id: string,
    updateConstructorStandingDto: UpdateConstructorStandingDto,
  ): Promise<ConstructorStanding> {
    const updatedStanding = await this.constructorStandingModel
      .findByIdAndUpdate(id, updateConstructorStandingDto, { new: true })
      .exec();
    if (!updatedStanding) {
      throw new NotFoundException(
        `ConstructorStanding with ID ${id} not found`,
      );
    }
    return updatedStanding;
  }

  async remove(id: string): Promise<void> {
    const result = await this.constructorStandingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(
        `ConstructorStanding with ID ${id} not found`,
      );
    }
  }
}
