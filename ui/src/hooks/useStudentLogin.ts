import { useMutation } from '@tanstack/react-query';
import { studentLogin } from '../services/StudentService';

/**
 * Custom hook to handle student login action.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const useStudentLogin = (options = {}) => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      studentLogin({email, password}),
    mutationKey: ['student', 'login'],
    ...options,
  });
};
