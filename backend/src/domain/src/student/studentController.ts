import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { StudentService } from './studentService';
import { CreateStudentDto } from './dto/createStudent';
import { StudentLoginDto } from './dto/loginStudent';
import { Student } from './student';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('register')
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    const existingStudent = this.studentService.findById(
      createStudentDto.studentId,
    );
    if (existingStudent) {
      throw new BadRequestException('Account already exists');
    }
    return this.studentService.create(createStudentDto);
  }

  @Post('login')
  async login(@Body() loginStudentDto: StudentLoginDto): Promise<Student> {
    const student = this.studentService.login(loginStudentDto);
    return student;
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
