import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql' as 'mysql',
      host: 'localhost',
      port: Number(process.env.MYSQL_DOCKER_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Book],
      synchronize: true,
      dropSchema: false,
    }),
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
