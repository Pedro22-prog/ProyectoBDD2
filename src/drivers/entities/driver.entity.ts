import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Driver extends Document {
  @Prop({ required: true })
  driverId: number;

  @Prop({ required: true })
  driverRef: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  forename: string;

  @Prop({ required: true })
  surname: string;

  @Prop({ required: true })
  dob: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  url: string;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);