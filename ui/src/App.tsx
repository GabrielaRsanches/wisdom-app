import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TeacherDashboard from './components/Teacher/pages/TeacherDashboard/TeacherDashboard';
import TeacherSignUp from './components/Teacher/pages/TeacherSignUp/TeacherSignUp';
import TeacherLogin from './components/Teacher/pages/TeacherLogin/TeacherLogin';

import SignUpAs from './components/SignUpAs/SignUpAs';

import StudentLogin from './components/Student/pages/StudentLogin/StudentLogin';
import StudentSignUp from './components/Student/pages/StudentSignUp/StudentSignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/teacher/dashboard" element={<TeacherDashboard children={undefined} />} />
        <Route path="/teacher/sign-up" element={<TeacherSignUp />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />

        <Route path="/sign-up" element={<SignUpAs />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/sign-up" element={<StudentSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;