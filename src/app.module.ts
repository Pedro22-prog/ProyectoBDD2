import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriversModule } from './drivers/drivers.module';
import { LapTimeModule } from './lap_times/lap_times.module';
import { CircuitsModule } from './circuits/circuits.module';
import { ConstructorResultsModule } from './constructor_results/constructor_results.module';
import { ConstructorStandingsModule } from './constructor_standings/constructor_standings.module';
import { DriverStandingsModule } from './driver_standings/driver_standings.module';
import { PitStopModule } from './pit_stops/pit_stops.module';
import { QualifyingModule } from './qualifying/qualifying.module';
import { RaceModule } from './races/races.module';
import { ResultsModule } from './results/results.module';
import { SprintResultsModule } from './sprint_results/sprint_results.module';
import { StatusModule } from './status/status.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConstructorModule } from './constructor/constructor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.DB_NAME,
      }),
    }),
    DriversModule,
    LapTimeModule,
    CircuitsModule,
    ConstructorResultsModule,
    ConstructorStandingsModule,
    DriverStandingsModule,
    PitStopModule,
    QualifyingModule,
    RaceModule,
    ResultsModule,
    SprintResultsModule,
    StatusModule,
    ConstructorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
