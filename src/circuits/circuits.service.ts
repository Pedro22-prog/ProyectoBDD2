import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Circuit } from './entities/circuit.entity';
import { CreateCircuitDto } from './dto/create-circuit.dto';

@Injectable()
export class CircuitsService {
  constructor(
    @InjectModel(Circuit.name) private circuitModel: Model<Circuit>,
  ) {}

  async create(createCircuitDto: CreateCircuitDto): Promise<Circuit> {
    const newCircuit = new this.circuitModel(createCircuitDto);
    return newCircuit.save();
  }

  async findAll(): Promise<Circuit[]> {
    return this.circuitModel.find().exec();
  }

  async findOne(id: string): Promise<Circuit> {
    const circuit = await this.circuitModel.findById(id).exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with ID ${id} not found`);
    }
    return circuit;
  }

  async update(id: string, updateCircuitDto: any): Promise<Circuit> {
    const circuit = await this.circuitModel
      .findByIdAndUpdate(id, updateCircuitDto, { new: true })
      .exec();
    if (!circuit) {
      throw new NotFoundException(`Circuit with ID ${id} not found`);
    }
    return circuit;
  }

  async remove(id: string): Promise<void> {
    const result = await this.circuitModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Circuit with ID ${id} not found`);
    }
  }
}
