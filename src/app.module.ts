import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'crud_demo',
      entities: [Book],
      synchronize: true,
      dropSchema: false,
    }),
    BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
