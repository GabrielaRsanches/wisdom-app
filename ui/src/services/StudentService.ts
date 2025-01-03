import axiosInstance from '../config/axiosConfig'
import { StudentLoginInterface, StudentRegistry } from '../components/helpers/interfaces';

export const studentLogin = async (data: StudentLoginInterface) => {
  const response = await axiosInstance.post('http://localhost:3000/students/login', data);
  return response.data;
};

export const studentSignUp = async (data: StudentRegistry) => {
  const response = await axiosInstance.post('http://localhost:3000/students/sign-up', data);
  return response.data;
};

export const getStudentById = async (studentId: number) => {
  const response = await axiosInstance.get(`http://localhost:3000/students/${studentId}`);
  return response.data;
};

export const getAnswersToStudentsQuestion = async (studentId: number, questionId: number) => {
  const response = await axiosInstance.get(`http://localhost:3000/students/${studentId}/questions/${questionId}/answers`);
  return response.data;
};