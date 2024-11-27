import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { Results, ResultsSchema } from './entities/result.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Results.name, schema: ResultsSchema }]),
  ],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}