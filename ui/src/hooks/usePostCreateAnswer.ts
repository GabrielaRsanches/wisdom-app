import { useMutation } from '@tanstack/react-query';
import { createAnswer } from '../services/AnswerService';
import { AnswerInterface } from '@shared/interfaces';

/**
 * Custom hook to create an answer.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const useCreateAnswer = (teacherId: number, questionId: number, options = {}) => {
  return useMutation<AnswerInterface, unknown, Partial<AnswerInterface>>({
    mutationFn: (data) => createAnswer(data, teacherId, questionId),
    mutationKey: ['answer', 'create'],
    ...options,
  });
};