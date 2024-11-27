import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Race extends Document {
  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  round: number;

  @Prop({ required: true })
  circuitId: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  url: string;

  @Prop({ default: '\\N' })
  fp1_date: string;

  @Prop({ default: '\\N' })
  fp1_time: string;

  @Prop({ default: '\\N' })
  fp2_date: string;

  @Prop({ default: '\\N' })
  fp2_time: string;

  @Prop({ default: '\\N' })
  fp3_date: string;

  @Prop({ default: '\\N' })
  fp3_time: string;

  @Prop({ default: '\\N' })
  quali_date: string;

  @Prop({ default: '\\N' })
  quali_time: string;

  @Prop({ default: '\\N' })
  sprint_date: string;

  @Prop({ default: '\\N' })
  sprint_time: string;
}

export const RaceSchema = SchemaFactory.createForClass(Race);
