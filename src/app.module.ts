import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { LapTimesModule } from './lap_times/lap_times.module';
import { CircuitsModule } from './circuits/circuits.module';
import { ConstructorResultsModule } from './constructor_results/constructor_results.module';
import { ConstructorStandingsModule } from './constructor_standings/constructor_standings.module';
import { DriverStandingsModule } from './driver_standings/driver_standings.module';
import { PitStopsModule } from './pit_stops/pit_stops.module';
import { QualifyingModule } from './qualifying/qualifying.module';
import { RacesModule } from './races/races.module';
import { ResultsModule } from './results/results.module';
import { SprintResultsModule } from './sprint_results/sprint_results.module';
import { StatusModule } from './status/status.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync(
      {
        useFactory:() => ({
            uri: process.env.MONGODB_URI,
            dbName: process.env.MONGODB_DB,
        }),
      }
    ), DriversModule, LapTimesModule, CircuitsModule, ConstructorResultsModule, ConstructorStandingsModule, DriverStandingsModule, PitStopsModule, QualifyingModule, RacesModule, ResultsModule, SprintResultsModule, StatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
