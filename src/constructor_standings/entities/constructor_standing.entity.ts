import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConstructorStanding extends Document {
  @Prop({ required: true })
  constructorStandingsId: number;

  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  constructorId: number;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  position: number;

  @Prop({ required: true })
  positionText: number;

  @Prop({ required: true })
  wins: number;
}

export const ConstructorStandingSchema =
  SchemaFactory.createForClass(ConstructorStanding);
