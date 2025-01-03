import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/Teacher/pages/TeacherDashboard/TeacherDashboard';
import TeacherSignUp from './components/Teacher/pages/TeacherSignUp/TeacherSignUp';
import TeacherLogin from './components/Teacher/pages/TeacherLogin/TeacherLogin';
import SignUpAs from './components/SignUpAs/SignUpAs';
import StudentLogin from './components/Student/pages/StudentLogin/StudentLogin';
import CreateQuestion from './components/Student/pages/CreateQuestion/CreateQuestion';
import StudentAccount from './components/Student/pages/StudentAccount/StudentAccount';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/teacher/dashboard" element={<TeacherDashboard children={undefined} />} />
          <Route path="/teachers/sign-up" element={<TeacherSignUp />} />
          <Route path="/teachers/login" element={<TeacherLogin />} />
          <Route path="/sign-up" element={<SignUpAs />} />
          <Route path="/students/login" element={<StudentLogin />} />
          <Route path="/students/:studentId/questions" element={<CreateQuestion />} />
          <Route path="/student/account/:studentId" element={<StudentAccount />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;