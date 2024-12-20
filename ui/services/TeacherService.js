import axios from 'axios';

export const fetchTeacherSignUp = async () => {
  const response = await axios.get('http://localhost:8080/teacher/sign-up');
  return response.data;
};

export const fetchTeacherDashboard = async () => {
  const response = await axios.get('http://localhost:8080/teacher/dashboard');
  return response.data;
};
