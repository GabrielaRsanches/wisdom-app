import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto';
import { Repository } from 'typeorm';
import { StudentEntity } from '../../../infra/persistence/entities/StudentEntity';
import { Student } from './Student';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    const studentDomain = new Student(
      createStudentDto.userName,
      createStudentDto.email,
      createStudentDto.password,
      createStudentDto.grade,
    );
    const newStudent = this.studentRepository.create({
      studentId: studentDomain.getId,
      userName: studentDomain.userName,
      email: studentDomain.email,
      password: studentDomain.getPassword,
      grade: studentDomain.grade,
    });

    return this.studentRepository.save(newStudent);
  }

  async findByEmail(email: string): Promise<StudentEntity | undefined> {
    return this.studentRepository.findOne({ where: { email } });
  }

  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<StudentEntity | null> {
    const student = await this.findByEmail(email);

    if (student && password === student.password) {
      return student;
    }

    return null;
  }
  async findAll(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  async findById(id: number): Promise<StudentEntity | undefined> {
    return this.studentRepository.findOne({ where: { studentId: id } });
  }
}
