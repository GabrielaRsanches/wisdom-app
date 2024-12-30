import axiosInstance from '../config/axiosConfig'
import { StudentLoginInterface, StudentRegistry } from '../components/helpers/interfaces';

export const studentLogin = async (data: StudentLoginInterface) => {
  const response = await axiosInstance.post('http://localhost:3000/student/login', data);
  return response.data;
};

export const studentSignUp = async (data: StudentRegistry) => {
  const response = await axiosInstance.post('http://localhost:3000/student/sign-up', data);
  return response.data;
};