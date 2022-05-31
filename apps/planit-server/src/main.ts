/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 3333;

  const config = new DocumentBuilder()
    .setTitle('PlanIT API')
    .setDescription('The monolith PlanIT API')
    .setVersion('1.0')
    // .addBearerAuth({
    //   type: 'oauth2',
    //   flows: {
    //     authorizationCode: {
    //       authorizationUrl: 'https://plan-it.us.auth0.com/authorize',
    //       tokenUrl: 'https://plan-it.us.auth0.com/oauth/token',
    //       scopes: ['openid'],
    //     },
    //   },
    // })
    .addBearerAuth()
    .addServer('http://localhost:3333')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
