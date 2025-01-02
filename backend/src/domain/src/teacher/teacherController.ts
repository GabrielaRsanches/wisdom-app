import {
  Controller,
  Get,
  Post,
  Body,
  Inject,
  forwardRef,
  // NotFoundException,
} from '@nestjs/common';
import { CreateTeacherDto } from './dto';
import { TeacherLoginDto } from './dto/loginTeacher';
import { TeacherService } from './teacherService';
import { CreateAnswerDto } from '../answer/dto/createAnswer';
import { AnswerService } from '../answer/answerService';

@Controller('teacher')
export class TeacherController {
  constructor(
    private readonly teacherService: TeacherService,
    @Inject(forwardRef(() => AnswerService))
    private readonly answerService: AnswerService,
  ) {}

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
  @Post('answer')
  async createAnswer(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.createAnswer(
      createAnswerDto,
      createAnswerDto.answeredBy,
    );
  }
}
