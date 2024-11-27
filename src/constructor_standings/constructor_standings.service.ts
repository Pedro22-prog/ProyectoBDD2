import { Injectable } from '@nestjs/common';
import { CreateConstructorStandingDto } from './dto/create-constructor_standing.dto';
import { UpdateConstructorStandingDto } from './dto/update-constructor_standing.dto';

@Injectable()
export class ConstructorStandingsService {
  create(createConstructorStandingDto: CreateConstructorStandingDto) {
    return 'This action adds a new constructorStanding';
  }

  findAll() {
    return `This action returns all constructorStandings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} constructorStanding`;
  }

  update(id: number, updateConstructorStandingDto: UpdateConstructorStandingDto) {
    return `This action updates a #${id} constructorStanding`;
  }

  remove(id: number) {
    return `This action removes a #${id} constructorStanding`;
  }
}
