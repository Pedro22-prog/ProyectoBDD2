import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Qualifying extends Document {
  @Prop({ required: true })
  qualifyId: number;

  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  constructorId: number;

  @Prop({ required: true })
  number: number;

  @Prop({ required: true })
  position: number;

  @Prop({ required: true })
  q1: string;

  @Prop({ required: true })
  q2: string;

  @Prop({ required: true })
  q3: string;
}

export const QualifyingSchema = SchemaFactory.createForClass(Qualifying);