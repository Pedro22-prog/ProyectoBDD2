import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConstructorResult extends Document {
  @Prop({ required: true })
  constructorId: number;

  @Prop({ required: true })
  constructorResultsId: number;

  @Prop({ required: true })
  points: number;

  @Prop({ required: true })
  raceId: number;

  @Prop({ required: true })
  status: string;
}

export const ConstructorResultSchema = SchemaFactory.createForClass(ConstructorResult);
