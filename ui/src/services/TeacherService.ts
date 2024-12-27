import axiosInstance from '../config/axiosConfig'
import { TeacherLoginInterface, TeacherRegistry } from 'ui/src/components/helpers/interfaces';

export const fetchTeacherSignUp = async () => {
  const response = await axiosInstance.get('http://localhost:8080/teacher/sign-up');
  return response.data;
};

export const fetchTeacherDashboard = async () => {
  const response = await axiosInstance.get('http://localhost:8080/teacher/dashboard');
  return response.data;
};

export const teacherLogin = async (data: TeacherLoginInterface) => {
  const response = await axiosInstance.post('http://localhost:3000/teacher/login', data);
  return response.data;
};

export const teacherSignUp = async (data: TeacherRegistry) => {
  const response = await axiosInstance.post('http://localhost:3000/teacher/sign-up', data);
  return response.data;
};