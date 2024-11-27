import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Circuit extends Document {
    @Prop({ required: true })
    circuitId: number;
    
    @Prop({required: true})
    circuitRef: string;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    location: string;

    @Prop({required: true})
    country: string;

    @Prop({required: true})
    lat: string;

    @Prop({required: true})
    lng: string;

    @Prop({required: true})
    alt: number;

    @Prop()
    url: string;
}

export const CircuitSchema = SchemaFactory.createForClass(Circuit);