import axiosInstance from '../config/axiosConfig';
import { QuestionInterface } from '@shared/interfaces';

/**
 * Service to create a question.
 * @param {Partial<QuestionInterface>} data - The question data to be created.
 * @returns {Promise<QuestionInterface>} - The created question response.
 */
export const createQuestion = async (data: Partial<QuestionInterface>, studentId: string): Promise<QuestionInterface> => {
  const response = await axiosInstance.post(`/students/${studentId}/questions`, data);
  return response.data;
};

export const fetchAllQuestions = async () => {
  const response = await axiosInstance.get(`/questions`);
  return response.data;
}

export const fetchQuestionsByStudentId = async (studentId: string) => {
  const response = await axiosInstance.get(`/questions?studentId=${studentId}`);
  return response.data;
}

export const fetchAnsweredQuestions = async () => {
  const response = await axiosInstance.get(`/questions?status=unanswered`);
  return response.data;
}