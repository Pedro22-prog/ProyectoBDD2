import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Constructor extends Document {
  @Prop({ required: true })
  constructorId: number;

  @Prop({ required: true })
  constructorRef: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  url: string;
}

export const ConstructorSchema = SchemaFactory.createForClass(Constructor);
