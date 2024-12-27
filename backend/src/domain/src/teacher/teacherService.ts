import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './Teacher';
import { TeachingArea } from '../../../../../shared/enum';
import { CreateTeacherDto } from './dto/createTeacher';

@Injectable()
export class TeacherService {
  private teachers: Teacher[] = [
    new Teacher(
      'John Doe',
      'john.doe@example.com',
      'StrongPassword123',
      [],
      [TeachingArea.Mathematics],
      100,
      [],
    ),
    new Teacher(
      'Jane Smith',
      'jane.smith@example.com',
      'AnotherStrongPassword123',
      [],
      [TeachingArea.Sciences],
      200,
      [],
    ),
  ];

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<Teacher> {
    const teacher = this.teachers.find(
      (t) => t.email === email && t.getPassword() === password,
    );
    if (!teacher) {
      throw new NotFoundException('Invalid credentials');
    }
    return teacher;
  }

  async findByEmail(email: string): Promise<Teacher | undefined> {
    return this.teachers.find((t) => t.email === email);
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const newTeacher = new Teacher(
      createTeacherDto.name,
      createTeacherDto.email,
      createTeacherDto.password,
      createTeacherDto.credentials,
      createTeacherDto.teachingArea,
      createTeacherDto.score || 0,
      createTeacherDto.answeredQuestions || [],
    );
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
