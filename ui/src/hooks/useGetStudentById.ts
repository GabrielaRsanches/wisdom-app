import { useState, useEffect } from 'react';
import { getStudentById } from '../services/StudentService';

export const useGetStudentById = (studentId: number | undefined) => {
  const [student, setStudent] = useState<{ name: string; grade: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!studentId) {
      setError('Student ID is required');
      setLoading(false);
      return;
    }

    const fetchStudent = async () => {
      try {
        const studentData = await getStudentById(studentId);
        setStudent({
          name: studentData.userName,
          grade: studentData.grade,
        });
      } catch (err) {
        setError('Failed to fetch student data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  return { student, loading, error };
};
