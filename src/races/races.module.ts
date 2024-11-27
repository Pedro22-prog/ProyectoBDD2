import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RaceService } from './races.service';
import { RaceController } from './races.controller';
import { Race, RaceSchema } from './entities/race.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Race.name, schema: RaceSchema }]),
  ],
  controllers: [RaceController],
  providers: [RaceService],
})
export class RaceModule {}
