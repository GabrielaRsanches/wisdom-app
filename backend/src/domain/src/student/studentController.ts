import {
  Controller,
  Post,
  Body,
  Get,
  Inject,
  forwardRef,
  Param,
} from '@nestjs/common';
import { StudentService } from './studentService';
import { CreateStudentDto } from './dto/createStudent';
import { QuestionService } from '../question/questionService';
import { CreateQuestionDto } from '../question/dto/createQuestion';

@Controller('students')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    @Inject(forwardRef(() => QuestionService))
    private readonly questionService: QuestionService,
  ) {}

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

  @Post(':studentId/questions')
  async createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createQuestion(createQuestionDto);
  }

  @Get(':studentId')
  async getStudentById(@Param('studentId') studentId: string) {
    return this.studentService.findById(Number(studentId));
  }
}
