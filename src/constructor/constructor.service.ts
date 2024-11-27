import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Constructor } from './entities/constructor.entity';
import { CreateConstructorDto } from './dto/create-constructor.dto';
import { UpdateConstructorDto } from './dto/update-constructor.dto';

@Injectable()
export class ConstructorService {
  constructor(
    @InjectModel(Constructor.name)
    private readonly constructorModel: Model<Constructor>,
  ) {}

  async create(createConstructorDto: CreateConstructorDto): Promise<Constructor> {
    const newConstructor = new this.constructorModel(createConstructorDto);
    return newConstructor.save();
  }

  findAll(): Promise<Constructor[]> {
    return this.constructorModel.find().exec();
  }

  async findOne(id: string): Promise<Constructor> {
    const constructor = await this.constructorModel.findById(id).exec();
    if (!constructor) {
      throw new NotFoundException(`Constructor with ID ${id} not found`);
    }
    return constructor;
  }

  async update(
    id: string,
    updateConstructorDto: UpdateConstructorDto,
  ): Promise<Constructor> {
    const updatedConstructor = await this.constructorModel
      .findByIdAndUpdate(id, updateConstructorDto, { new: true })
      .exec();
    if (!updatedConstructor) {
      throw new NotFoundException(`Constructor with ID ${id} not found`);
    }
    return updatedConstructor;
  }

  async remove(id: string): Promise<void> {
    const result = await this.constructorModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Constructor with ID ${id} not found`);
    }
  }
}
