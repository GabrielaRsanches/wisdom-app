import { Injectable } from '@nestjs/common';
import { Teacher } from './Teacher';
import { CreateTeacherDto } from './dto/createTeacher';

@Injectable()
export class TeacherService {
  private readonly teachers: Teacher[] = [];

  create(createTeacherDto: CreateTeacherDto): Teacher {
    return ;
  }

  findAll(): Teacher[] {
    return this.teachers;
  }
}
