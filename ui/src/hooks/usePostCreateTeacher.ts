import { useMutation } from '@tanstack/react-query';
import { teacherSignUp } from '../services/TeacherService';
import { TeachingArea } from '@shared/enum';

/**
 * Custom hook for creating a teacher.
 * @param {object} options - Options for the mutation (e.g., onSuccess, onError).
 */
export const usePostCreateTeacher = (options = {}) => {
  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string; confirmPassword: string, teachingAreas: TeachingArea[], credentials: Credential }) =>
      teacherSignUp(data),
    mutationKey: ['teacher', 'create'],
    ...options,
  });
};
