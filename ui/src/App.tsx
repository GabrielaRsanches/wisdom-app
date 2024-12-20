import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/Teacher/components/TeacherDashboard/TeacherDashboard';
import TeacherSignUp from './components/Teacher/pages/TeacherSignIn/TeacherSignUp';
import MainHeader from './components/Teacher/components/MainHeader/MainHeader';

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/teacher/dashboard" element={<TeacherDashboard children={undefined} />} />
        <Route path="/teacher/sign-up" element={<TeacherSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;