import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    whitelist:true,
    // basically whitelist remove extra/unwanted inputs from user not mentioned in dtos
    transform:true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }));
  await app.listen(3000);
}
bootstrap();
