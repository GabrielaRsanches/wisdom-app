import axiosInstance from '../config/axiosConfig';
import { AnswerInterface } from '@shared/interfaces';

/**
 * Service to create a question.
 * @param {Partial<AnswerInterface>} data - The question data to be created.
 * @returns {Promise<AnswerInterface>} - The created question response.
 */
export const createAnswer = async (data: Partial<AnswerInterface>): Promise<AnswerInterface> => {
  const response = await axiosInstance.post('/teacher/answer', data);
  return response.data;
};
