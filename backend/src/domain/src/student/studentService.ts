import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student';
import { CreateStudentDto } from './dto/createStudent';
import { StudentLoginDto } from './dto/loginStudent';

@Injectable()
export class StudentService {
  private readonly students: Student[] = [];

  create(createStudentDto: CreateStudentDto): Student {
    const student = new Student(
      createStudentDto.userName,
      createStudentDto.password,
      createStudentDto.grade,
    );
    this.students.push(student);
    return student;
  }

  findAll(): Student[] {
    return this.students;
  }

  findById(studentId: number): Student {
    return this.students.find((student) => student.getId === studentId);
  }

  findByUserNameAndPassword(userName: string, password: string): Student {
    return this.students.find(
      (student) =>
        student.userName === userName && student.getPassword === password,
    );
  }

  login(loginStudentDto: StudentLoginDto): Student {
    const student = this.findByUserNameAndPassword(
      loginStudentDto.userName,
      loginStudentDto.password,
    );
    if (!student) {
      throw new NotFoundException('Invalid username or password');
    }
    return student;
  }

  updatePassword(studentId: number, newPassword: string): Student {
    const studentIndex = this.students.findIndex(
      (student) => student.getId === studentId,
    );
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students[studentIndex].changePassword(newPassword);
    return this.students[studentIndex];
  }

  updateUserName(studentId: number, newUserName: string): Student {
    const studentIndex = this.students.findIndex(
      (student) => student.getId === studentId,
    );
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students[studentIndex].changeUserName(newUserName);
    return this.students[studentIndex];
  }

  deleteAccount(studentId: number): void {
    const studentIndex = this.students.findIndex(
      (student) => student.getId === studentId,
    );
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students.splice(studentIndex, 1);
  }
}
