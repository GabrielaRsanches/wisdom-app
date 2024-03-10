import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from './studentService';
import { CreateStudentDto } from './dto/createStudent';
import { Student } from './Student';

@Controller('teacher')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}