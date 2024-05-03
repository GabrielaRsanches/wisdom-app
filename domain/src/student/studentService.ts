import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student';
import { CreateStudentDto } from './dto/createStudent';
import { StudentLoginDto } from './dto/loginStudent';
import { UpdateStudentDto } from './dto/updateStudent';
import { v4 as uuidv4 } from 'uuid';

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

  findById(studentId: uuidv4): Student {
    return this.students.find((student) => student._studentId === studentId);
  }

  findByUserNameAndPassword(userName: string, password: string): Student {
    return this.students.find((student) => student.userName === userName && student._password === password);
  }

  login(loginStudentDto: StudentLoginDto): Student {
    const student = this.findByUserNameAndPassword(loginStudentDto.userName, loginStudentDto.password);
    if (!student) {
      throw new NotFoundException('Invalid username or password');
    }
    return student;
  }

  updatePassword(studentId: uuidv4, newPassword: string): Student {
    const studentIndex = this.students.findIndex((student) => student._studentId === studentId);
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students[studentIndex].changePassword(newPassword);
    return this.students[studentIndex];
  }

  updateUserName(studentId: string, newUserName: string): Student {
    const studentIndex = this.students.findIndex((student) => student._studentId === studentId);
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students[studentIndex].changeUserName(newUserName);
    return this.students[studentIndex];
  }

  deleteAccount(studentId: string): void {
    const studentIndex = this.students.findIndex((student) => student._studentId === studentId);
    if (studentIndex === -1) {
      throw new NotFoundException('Student not found');
    }
    this.students.splice(studentIndex, 1);
  }
}

