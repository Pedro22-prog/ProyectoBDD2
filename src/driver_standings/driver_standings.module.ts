import { Module } from '@nestjs/common';
import { DriverStandingsService } from './driver_standings.service';
import { DriverStandingsController } from './driver_standings.controller';

@Module({
  controllers: [DriverStandingsController],
  providers: [DriverStandingsService],
})
export class DriverStandingsModule {}
