import { Injectable } from '@nestjs/common';
import { Student } from './Student';
import { CreateStudentDto } from './dto/createStudent';


@Injectable()
export class StudentService {
  private readonly student: Student[] = [];

  create(createStudentDto: CreateStudentDto): Student {
   
    return ;
  }

  findAll(): Student [] {
    return this.student;
  }
}
