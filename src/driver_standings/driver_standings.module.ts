import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverStandingsService } from './driver_standings.service';
import { DriverStandingsController } from './driver_standings.controller';
import { DriverStandingsSchema, DriverStandings } from './entities/driver_standing.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DriverStandings.name, schema: DriverStandingsSchema },
    ]),
  ],
  controllers: [DriverStandingsController],
  providers: [DriverStandingsService],
})
export class DriverStandingsModule {}
