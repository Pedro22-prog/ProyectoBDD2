import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConstructorStanding } from './entities/constructor_standing.entity';
import { ConstructorStandingsService } from './constructor_standings.service';
import { ConstructorStandingsController } from './constructor_standings.controller';
import { ConstructorStandingSchema } from './entities/constructor_standing.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConstructorStanding.name, schema: ConstructorStandingSchema },
    ]),
  ],
  controllers: [ConstructorStandingsController],
  providers: [ConstructorStandingsService],
})
export class ConstructorStandingsModule {}
