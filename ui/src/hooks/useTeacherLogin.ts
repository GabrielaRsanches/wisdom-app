import { useMutation } from '@tanstack/react-query';
import { teacherLogin } from '../services/TeacherService';

/**
 * Custom hook to handle teacher login action.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const useTeacherLogin = (options = {}) => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      teacherLogin({email, password}),
    mutationKey: ['teacher', 'login'],
    ...options,
  });
};
