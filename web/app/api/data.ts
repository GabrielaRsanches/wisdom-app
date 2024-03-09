import {TeacherRegistry, StudentRegistry, Question, Answer} from '../models/models'; 
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


async function fetchFromBackend<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}

export async function TeacherRegistryHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const teacherData = await fetchFromBackend<TeacherRegistry>('http://localhost:3000/login/teacher-login');
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function StudentRegistryHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const studentData = await fetchFromBackend<StudentRegistry>('http://localhost:3000/login/student-login');
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function QuestionHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const questionData = await fetchFromBackend<Question>('http://localhost:3000/dashboard/questions');
    res.status(200).json(questionData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function AnswerHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const answerData = await fetchFromBackend<Answer>('http://localhost:3000/teacher/${teacherId}/answers');
    res.status(200).json(answerData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
