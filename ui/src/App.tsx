import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherDashboard from './components/Teacher/pages/TeacherDashboard/TeacherDashboard';
import TeacherSignUp from './components/Teacher/pages/TeacherSignUp/TeacherSignUp';
import TeacherLogin from './components/Teacher/pages/TeacherLogin/TeacherLogin';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/teacher/dashboard" element={<TeacherDashboard children={undefined} />} />
        <Route path="/teacher/sign-up" element={<TeacherSignUp />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
};

export default App;