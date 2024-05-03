import { Controller, Get, Post, Body, BadRequestException, NotFoundException } from '@nestjs/common';
import { TeacherService } from './teacherService';
import { CreateTeacherDto } from './dto/createTeacher';
import { Teacher } from './teacher';
import { TeacherLoginDto } from './dto/loginTeacher';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('register')
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const existingTeacher = this.teacherService.findById(createTeacherDto.teacherId);
    if (existingTeacher) {
      throw new BadRequestException('Account already exists');
    }
    return this.teacherService.create(createTeacherDto);
  }

  @Post('login')
  async login(@Body() loginTeacherDto: TeacherLoginDto): Promise<Teacher> {
    const teacher = this.teacherService.findByEmailAndPassword(loginTeacherDto.email, loginTeacherDto.password);
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }
    return teacher;
  }
  
  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }
}
