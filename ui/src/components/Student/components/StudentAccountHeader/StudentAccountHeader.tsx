import {
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading } from '@chakra-ui/react'
import * as S from './StudentAccountHeader.styles';
import { useGetStudentById } from '../../../../hooks/useGetStudentById';

type StudentAccountHeaderProps = {
  studentId: any;
};

const StudentAccountHeader: React.FC<StudentAccountHeaderProps> = ({ studentId }) => {
  
  const { student, loading, error } = useGetStudentById(studentId);
  console.log(student)
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;
  
  return (
    <S.ContainerStyles as={SimpleGrid} maxW={'2xl'}>
      <S.HeadingStyles>
        <Text bgClip="text" color="linear(to-r, red.400,pink.400)">{student?.name}</Text>
        <Text>{student?.grade}</Text>
      </S.HeadingStyles>

      <S.TabsStyles>
        <Tabs variant='soft-rounded' colorScheme='pink'>
          <TabList>
            <Tab>QUESTIONS</Tab>
            <Tab>LIKES</Tab>
            <Tab>ACTIVITY</Tab>
          </TabList>
        </Tabs>
      </S.TabsStyles>

    </S.ContainerStyles>
  );
};

export default StudentAccountHeader;