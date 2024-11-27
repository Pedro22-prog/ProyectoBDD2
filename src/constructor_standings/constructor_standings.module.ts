import { Module } from '@nestjs/common';
import { ConstructorStandingsService } from './constructor_standings.service';
import { ConstructorStandingsController } from './constructor_standings.controller';

@Module({
  controllers: [ConstructorStandingsController],
  providers: [ConstructorStandingsService],
})
export class ConstructorStandingsModule {}
