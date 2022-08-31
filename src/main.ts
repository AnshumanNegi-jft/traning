import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  console.log(__dirname)
 
  app.setBaseViewsDir(join(__dirname,'../src','views'));
  app.setViewEngine('ejs');

  app.use(cookieParser());

  await app.listen(5000);
}
bootstrap();

