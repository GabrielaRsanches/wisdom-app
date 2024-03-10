import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacherService';
import { CreateTeacherDto } from './dto/createTeacher';
import { Teacher } from './Teacher';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }
}
