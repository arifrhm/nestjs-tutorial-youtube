import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port : number = Number(process.env.PORT);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);

    Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();