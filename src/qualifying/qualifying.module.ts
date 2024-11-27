import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QualifyingService } from './qualifying.service';
import { QualifyingController } from './qualifying.controller';
import { Qualifying, QualifyingSchema } from './entities/qualifying.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Qualifying.name, schema: QualifyingSchema }]),
  ],
  controllers: [QualifyingController],
  providers: [QualifyingService],
})
export class QualifyingModule {}