import axiosInstance from '../config/axiosConfig';
import { fetchTeacherSignUp, fetchTeacherDashboard, teacherLogin } from './TeacherService';
import { TeacherLoginInterface } from 'ui/src/components/helpers/interfaces';

jest.mock('../config/axiosConfig');

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('TeacherService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchTeacherSignUp', () => {
    it('should fetch the teacher sign-up data successfully', async () => {
      const mockResponse = { data: { message: 'Success' } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await fetchTeacherSignUp();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/teacher/sign-up');
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if the API call fails', async () => {
      const mockError = new Error('Failed to fetch sign-up data');
      mockedAxios.get.mockRejectedValueOnce(mockError);

      await expect(fetchTeacherSignUp()).rejects.toThrow('Failed to fetch sign-up data');
    });
  });

  describe('fetchTeacherDashboard', () => {
    it('should fetch the teacher dashboard data successfully', async () => {
      const mockResponse = { data: { dashboard: 'Dashboard Data' } };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await fetchTeacherDashboard();

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/teacher/dashboard');
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if the API call fails', async () => {
      const mockError = new Error('Failed to fetch dashboard data');
      mockedAxios.get.mockRejectedValueOnce(mockError);

      await expect(fetchTeacherDashboard()).rejects.toThrow('Failed to fetch dashboard data');
    });
  });

  describe('teacherLogin', () => {
    it('should login the teacher and return data successfully', async () => {
      const mockData: TeacherLoginInterface = {
        email: 'teacher@example.com',
        password: 'password123',
      };
      const mockResponse = { data: { token: '12345', teacher: { id: 1, name: 'Test Teacher' } } };
      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const result = await teacherLogin(mockData);

      expect(mockedAxios.post).toHaveBeenCalledWith('http://localhost:3000/teacher/login', mockData);
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error if the login API call fails', async () => {
      const mockData: TeacherLoginInterface = {
        email: 'teacher@example.com',
        password: 'password123',
      };
      const mockError = new Error('Login failed');
      mockedAxios.post.mockRejectedValueOnce(mockError);

      await expect(teacherLogin(mockData)).rejects.toThrow('Login failed');
    });
  });
});
