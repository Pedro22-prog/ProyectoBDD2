import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConstructorResult } from './entities/constructor_result.entity';
import { CreateConstructorResultDto } from './dto/create-constructor_result.dto';
import { UpdateConstructorResultDto } from './dto/update-constructor_result.dto';

@Injectable()
export class ConstructorResultsService {
    constructor(
        @InjectModel(ConstructorResult.name) private constructorResultModel: Model<ConstructorResult>,
    ) {}

    async create(createConstructorResultDto: CreateConstructorResultDto): Promise<ConstructorResult> {
        const newResult = new this.constructorResultModel(createConstructorResultDto);
        return newResult.save();
    }

    async findAll(): Promise<ConstructorResult[]> {
        return this.constructorResultModel.find().exec();
    }

    async findOne(id: string): Promise<ConstructorResult> {
        const result = await this.constructorResultModel.findById(id).exec();
        if (!result) {
            throw new NotFoundException(`ConstructorResult with ID ${id} not found`);
        }
        return result;
    }

    async update(id: string, updateConstructorResultDto: UpdateConstructorResultDto): Promise<ConstructorResult> {
        const result = await this.constructorResultModel
            .findByIdAndUpdate(id, updateConstructorResultDto, { new: true })
            .exec();
        if (!result) {
            throw new NotFoundException(`ConstructorResult with ID ${id} not found`);
        }
        return result;
    }

    async remove(id: string): Promise<void> {
        const result = await this.constructorResultModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`ConstructorResult with ID ${id} not found`);
        }
    }
}