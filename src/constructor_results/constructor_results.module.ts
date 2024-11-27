import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConstructorResultsService } from './constructor_results.service';
import { ConstructorResultsController } from './constructor_results.controller';
import { ConstructorResultSchema, ConstructorResult} from './entities/constructor_result.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConstructorResult.name, schema: ConstructorResultSchema },
    ]),
  ],
  controllers: [ConstructorResultsController],
  providers: [ConstructorResultsService],
})
export class ConstructorResultsModule {}
