import axiosInstance from '../config/axiosConfig'

export const fetchSignUp = async () => {
  const response = await axiosInstance.get('http://localhost:8081/sign-up');
  return response.data;
};