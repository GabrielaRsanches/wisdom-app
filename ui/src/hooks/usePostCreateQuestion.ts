import { useMutation } from '@tanstack/react-query';
import { createQuestion } from '../services/QuestionService';
import { QuestionInterface } from '@shared/interfaces';

/**
 * Custom hook to create a question as a student.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const useCreateQuestion = (studentId: string, options: object = {}) => {
  return useMutation<QuestionInterface, unknown, Partial<QuestionInterface>>({
    mutationFn: (data) => createQuestion(data, studentId),
    mutationKey: ['question', 'create'],
    ...options,
  });
};