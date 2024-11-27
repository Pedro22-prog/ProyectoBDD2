import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status, StatusSchema } from './entities/status.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }]),
  ],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}