import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher';
import { CreateTeacherDto } from './dto/createTeacher';
import { Email } from '../../../../../shared/interfaces';
import { UpdateTeacherDto } from './dto/updateTeacher';
@Injectable()
export class TeacherService {
  private readonly teachers: Teacher[] = [];

  create(createTeacherDto: CreateTeacherDto): Teacher {
    const teacher = new Teacher(
      createTeacherDto.name,
      createTeacherDto.email,
      createTeacherDto.password,
      createTeacherDto.credentials,
      createTeacherDto.teachingArea,
    );
    this.teachers.push(teacher);
    return teacher;
  }

  findAll(): Teacher[] {
    return this.teachers;
  }

  findById(teacherId: number): Teacher {
    return this.teachers.find((teacher) => teacher.getTeacherId === teacherId);
  }

  findByEmailAndPassword(email: Email, password: string): Teacher {
    return this.teachers.find(
      (teacher) => teacher.email === email && teacher.getPassword === password,
    );
  }

  update(teacherId: number, updateTeacherDto: UpdateTeacherDto): Teacher {
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.getTeacherId === teacherId,
    );
    if (teacherIndex === -1) {
      throw new NotFoundException('Teacher not found');
    }
    const updatedTeacher = new Teacher(
      updateTeacherDto.updateName ?? this.teachers[teacherIndex].name,
      updateTeacherDto.updateEmail ?? this.teachers[teacherIndex].email,
      updateTeacherDto.updatePassword ??
        this.teachers[teacherIndex].getPassword,
      updateTeacherDto.updateCredentials ??
        this.teachers[teacherIndex].credentials,
      updateTeacherDto.updateTeachingAreas ??
        this.teachers[teacherIndex].teachingArea,
      this.teachers[teacherIndex].score,
      this.teachers[teacherIndex].answeredQuestions,
    );
    this.teachers[teacherIndex] = updatedTeacher;
    return updatedTeacher;
  }
}
