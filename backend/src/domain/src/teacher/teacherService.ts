import { Inject, Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { CreateTeacherDto } from './dto/createTeacher';
import { Repository } from 'typeorm';
import { TeacherEntity } from '../../../infra/persistence/entities/TeacherEntity';
import { Teacher } from './Teacher';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('TEACHER_REPOSITORY')
    private teacherRepository: Repository<TeacherEntity>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<TeacherEntity> {
    const teacherDomain = new Teacher(
      createTeacherDto.name,
      createTeacherDto.email,
      createTeacherDto.password,
      createTeacherDto.credentials,
      createTeacherDto.teachingAreas,
      createTeacherDto.score || 0,
    );
    const newTeacher = this.teacherRepository.create({
      name: teacherDomain.name,
      email: teacherDomain.email,
      password: teacherDomain.getPassword(),
      credentials: teacherDomain.credentials,
      teachingAreas: teacherDomain.teachingAreas,
      score: teacherDomain.score || 0,
    });

    return this.teacherRepository.save(newTeacher);
  }

  async findByEmail(email: string): Promise<TeacherEntity | undefined> {
    return this.teacherRepository.findOne({ where: { email } });
  }

  async findByEmailAndPassword(
  email: string,
  password: string,
): Promise<TeacherEntity | null> {
  const teacher = await this.findByEmail(email);

  if (teacher && password === teacher.password) {
    return teacher;
  }

  return null;
}
  async findAll(): Promise<TeacherEntity[]> {
    return this.teacherRepository.find();
  }
}
