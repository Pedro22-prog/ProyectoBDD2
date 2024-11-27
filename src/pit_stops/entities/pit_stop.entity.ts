import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PitStop extends Document {
  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  stop: number;

  @Prop({ required: true })
  lap: number;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  milliseconds: number;
}

export const PitStopSchema = SchemaFactory.createForClass(PitStop);
