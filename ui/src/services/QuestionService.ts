import axiosInstance from '../config/axiosConfig';
import { QuestionInterface } from '@shared/interfaces';

/**
 * Service to create a question.
 * @param {Partial<QuestionInterface>} data - The question data to be created.
 * @returns {Promise<QuestionInterface>} - The created question response.
 */
export const createQuestion = async (data: Partial<QuestionInterface>): Promise<QuestionInterface> => {
  const response = await axiosInstance.post('/student/question', data);
  return response.data;
};
