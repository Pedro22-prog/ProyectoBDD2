import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PitStopService } from './pit_stops.service';
import { PitStopController } from './pit_stops.controller';
import { PitStop, PitStopSchema } from './entities/pit_stop.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PitStop.name, schema: PitStopSchema }]),
  ],
  controllers: [PitStopController],
  providers: [PitStopService],
})
export class PitStopModule {}