import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './Teacher';
import { TeachingArea } from '../../../../../shared/enum';

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
}
