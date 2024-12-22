import React from 'react';
import TeacherSidebar from '../../components/TeacherSidebar/TeacherSidebar';

interface TeacherDashboardProps {
  children: React.ReactNode;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ children }) => {
  return (
    <React.Fragment>
    <TeacherSidebar onClick={function () {} }/>
    </React.Fragment>
  );
}

export default TeacherDashboard