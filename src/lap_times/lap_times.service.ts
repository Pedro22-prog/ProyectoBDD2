import { Injectable } from '@nestjs/common';
import { CreateLapTimeDto } from './dto/create-lap_time.dto';
import { UpdateLapTimeDto } from './dto/update-lap_time.dto';

@Injectable()
export class LapTimesService {
  create(createLapTimeDto: CreateLapTimeDto) {
    return 'This action adds a new lapTime';
  }

  findAll() {
    return `This action returns all lapTimes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lapTime`;
  }

  update(id: number, updateLapTimeDto: UpdateLapTimeDto) {
    return `This action updates a #${id} lapTime`;
  }

  remove(id: number) {
    return `This action removes a #${id} lapTime`;
  }
}
