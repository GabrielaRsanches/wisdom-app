import { useMutation } from '@tanstack/react-query';
import { createAnswer } from '../services/AnswerService';
import { AnswerInterface } from '@shared/interfaces';

/**
 * Custom hook to create a question as a student.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const useCreateQuestion = (options = {}) => {
  return useMutation<AnswerInterface, unknown, Partial<AnswerInterface>>({
    mutationFn: (data) => createAnswer(data),
    mutationKey: ['answer', 'create'],
    ...options,
  });
};