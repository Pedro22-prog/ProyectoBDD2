import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintResultsService } from './sprint_results.service';
import { SprintResultsController } from './sprint_results.controller';
import { SprintResults, SprintResultsSchema } from './entities/sprint_result.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SprintResults.name, schema: SprintResultsSchema }]),
  ],
  controllers: [SprintResultsController],
  providers: [SprintResultsService],
})
export class SprintResultsModule {}
