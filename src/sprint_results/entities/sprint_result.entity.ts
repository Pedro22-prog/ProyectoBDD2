import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SprintResults extends Document {
  @Prop({ required: true })
  resultId: number;

  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  constructorId: number;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  grid: number;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  positionText: string;

  @Prop({ required: true })
  positionOrder: number;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  laps: number;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  milliseconds: string;

  @Prop({ required: true })
  fastestLap: string;

  @Prop({ required: true })
  fastestLapTime: string;

  @Prop({ required: true })
  statusId: number;
}

export const SprintResultsSchema = SchemaFactory.createForClass(SprintResults);