import {
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading } from '@chakra-ui/react'
import * as S from './StudentAccountHeader.styles';

const StudentAccountHeader = () => {
 
  return (
    <S.ContainerStyles as={SimpleGrid} maxW={'2xl'}>
      <S.HeadingStyles>
        <Text bgClip="text" color="linear(to-r, red.400,pink.400)">STUDENT NAME</Text>
        <Text>First Grade</Text>
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