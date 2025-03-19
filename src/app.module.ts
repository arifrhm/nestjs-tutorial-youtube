import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';

@Module({
    imports: [TypeOrmModule.forRoot({
      name: 'default',
      type: process.env.DB_TYPE as 'mysql' | 'postgres' | 'sqlite' | 'mssql' | 'oracle' | 'mariadb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      synchronize: true,
      dropSchema: false,
      logging: true,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      migrations: [__dirname + '/**/*.migration.{js,ts}'],
      subscribers: [__dirname + '/**/*.subscriber.{js,ts}'],
    }), FilekitaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}