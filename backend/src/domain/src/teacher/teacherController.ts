import {
  Controller,
  Get,
  Post,
  Body,
  // NotFoundException,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto';
import { TeacherLoginDto } from './dto/loginTeacher';
import { TeacherService } from './teacherService';
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('sign-up')
  getSignUp() {
    return { message: 'Teacher Sign Up Endpoint' };
  }
  @Get('dashboard')
  getDashboard() {
    return { message: 'Teacher Dashboard Endpoint' };
  }
  @Post('login')
  async login(@Body() loginTeacherDto: TeacherLoginDto) {
    const { email, password } = loginTeacherDto;

    const teacher = await this.teacherService.findByEmailAndPassword(
      email,
      password,
    );
    if (!teacher) {
      throw new Error('Invalid email or password');
    }
    return { message: 'Login successful', teacher };
  }

  @Post('sign-up')
  async createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  // @Get()
  // async findAll(): Promise<Teacher[]> {
  //   return this.teacherService.findAll();
  // }
}
