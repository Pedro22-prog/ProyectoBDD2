import { Injectable } from '@nestjs/common';
import { CreateDriverStandingDto } from './dto/create-driver_standing.dto';
import { UpdateDriverStandingDto } from './dto/update-driver_standing.dto';

@Injectable()
export class DriverStandingsService {
  create(createDriverStandingDto: CreateDriverStandingDto) {
    return 'This action adds a new driverStanding';
  }

  findAll() {
    return `This action returns all driverStandings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverStanding`;
  }

  update(id: number, updateDriverStandingDto: UpdateDriverStandingDto) {
    return `This action updates a #${id} driverStanding`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverStanding`;
  }
}
