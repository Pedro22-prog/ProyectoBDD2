import { Module } from '@nestjs/common';
import { LapTimesService } from './lap_times.service';
import { LapTimesController } from './lap_times.controller';

@Module({
  controllers: [LapTimesController],
  providers: [LapTimesService],
})
export class LapTimesModule {}
