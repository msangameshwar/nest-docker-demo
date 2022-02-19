import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) { }

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.bookRepository.save(createBookDto);
    } catch (err) {
      return err;
    }
  }

  async findAll(): Promise<Book[]> {
    try {
      return await this.bookRepository.find();
    } catch (err) {
      return err;
    }
  }

  async findOne(id: number) {
    try {
      return await this.bookRepository.findOne(id);
    } catch (err) {
      return err;
    }
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      const update = await this.bookRepository.update(id, updateBookDto)
      if (update) {
        const updatedBook = await this.bookRepository.findOne(id);
        return updatedBook;
      }
    } catch (err) {
      return err;
    }
  }

  async remove(id: number) {
    try {
      const deleted = await this.bookRepository.findOne(id);
      const del = await this.bookRepository.delete(id);
      if (del) {
        return deleted;
      }
    } catch (err) {
      return err;
    }
  }
}
