import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  // NotFoundException,
} from '@nestjs/common';
import { Teacher } from './Teacher';
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
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const existingTeacher = await this.teacherService.findByEmail(
      createTeacherDto.email,
    );

    if (existingTeacher) {
      throw new BadRequestException('Account already exists');
    }

    return this.teacherService.create(createTeacherDto);
  }

  // @Get()
  // async findAll(): Promise<Teacher[]> {
  //   return this.teacherService.findAll();
  // }
}
