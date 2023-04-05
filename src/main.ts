import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug', 'log', 'warn'],
  });
  app.enableCors();
  const config = new DocumentBuilder()
      .setTitle('')
      .setDescription('API for electricity offers handling')
      .setVersion('1.0')
      .addTag('electricity handling')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
