import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CircuitsService } from './circuits.service';
import { CircuitsController } from './circuits.controller';
import { Circuit, CircuitSchema } from './entities/circuit.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{name: Circuit.name, schema: CircuitSchema}]),
  ],
  controllers: [CircuitsController],
  providers: [CircuitsService],
})
export class CircuitsModule {}