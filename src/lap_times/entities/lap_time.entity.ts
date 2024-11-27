import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LapTime extends Document {
  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  lap: number;

  @Prop({ required: true })
  position: number;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  milliseconds: number;
}

export const LapTimeSchema = SchemaFactory.createForClass(LapTime);