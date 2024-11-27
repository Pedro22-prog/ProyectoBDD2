import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConstructorService } from './constructor.service';
import { ConstructorController } from './constructor.controller';
import { Constructor, ConstructorSchema } from './entities/constructor.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Constructor.name, schema: ConstructorSchema },
    ]),
  ],
  controllers: [ConstructorController],
  providers: [ConstructorService],
})
export class ConstructorModule {}
