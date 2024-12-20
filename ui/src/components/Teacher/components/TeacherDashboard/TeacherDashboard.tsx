import React from 'react';
import { Box, Card, CardBody, Stack, StackDivider } from '@chakra-ui/react';
import TeacherSidebar from '../TeacherSidebar/TeacherSidebar';

interface TeacherDashboardProps {
  children: React.ReactNode;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ children }) => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
        <Box>
          <TeacherSidebar onClick={function () {} }/>
        <React.Fragment>{children}</React.Fragment>
      </Box>
      </Stack>
    </CardBody>
  </Card>
   
  );
}

export default TeacherDashboard