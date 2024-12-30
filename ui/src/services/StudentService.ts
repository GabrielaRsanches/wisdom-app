import axiosInstance from '../config/axiosConfig'
import { StudentLoginInterface } from 'ui/src/components/helpers/interfaces';

export const studentLogin = async (data: StudentLoginInterface) => {
  const response = await axiosInstance.post('http://localhost:3000/student/login', data);
  return response.data;
};