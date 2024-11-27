import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DriverStandings extends Document {
  @Prop({ required: true })
  driverStandingsId: number;

  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  position: number;

  @Prop({ required: true })
  positionText: number;

  @Prop({ required: true })
  wins: number;
}

export const DriverStandingsSchema = SchemaFactory.createForClass(DriverStandings);