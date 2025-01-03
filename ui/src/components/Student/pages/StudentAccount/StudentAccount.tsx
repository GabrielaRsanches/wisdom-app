import {
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import StudentAccountHeader from '../../components/StudentAccountHeader/StudentAccountHeader';

const StudentAccount = () => {
 const {studentId} = useParams();

  if (!studentId) {
    return <Container>No student ID provided</Container>;
  }
  
  return (
    <React.Fragment>
      <StudentAccountHeader studentId={studentId}/>
      <Container>

      </Container>
    </React.Fragment>
   
  );
};

export default StudentAccount;
