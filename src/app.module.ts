import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PilotsModule } from './pilots/pilots.module';

@Module({
  imports: [PilotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
