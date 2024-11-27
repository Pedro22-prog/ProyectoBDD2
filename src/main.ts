import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {
      origin:'',
      methods:'GET, HEAD, PUT PATCH, POST, DELETE',
      allowedHeaders: 'Content-Type, Accept'
    }
  )
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  const config = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('Estadisticas de Formula')
  .addTag('nestjs').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
