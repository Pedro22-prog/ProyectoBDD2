import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LapTimeService } from './lap_times.service';
import { LapTimeController } from './lap_times.controller';
import { LapTime, LapTimeSchema } from './entities/lap_time.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LapTime.name, schema: LapTimeSchema }]),
  ],
  controllers: [LapTimeController],
  providers: [LapTimeService],
})
export class LapTimeModule {}
