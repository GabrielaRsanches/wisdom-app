import { Controller, Post, Body, Get } from '@nestjs/common';
import { StudentService } from './studentService';
import { CreateStudentDto } from './dto/createStudent';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('sign-up')
  getSignUp() {
    return { message: 'Student Sign Up Endpoint' };
  }

  @Post('sign-up')
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const student = await this.studentService.findByEmailAndPassword(
      email,
      password,
    );
    if (!student) {
      throw new Error('Invalid credentials');
    }
    return student;
  }
}
