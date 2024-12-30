import { useMutation } from '@tanstack/react-query';
import { Grade } from '@shared/enum';
import { studentSignUp } from '../services/StudentService';

/**
 * Custom hook for creating a teacher.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const usePostCreateStudent = (options = {}) => {
  return useMutation({
    mutationFn: (data: { userName: string; email: string; password: string; confirmPassword: string, grade: Grade}) =>
      studentSignUp(data),
    mutationKey: ['student', 'create'],
    ...options,
  });
};
