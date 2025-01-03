import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link
} from '@chakra-ui/react'
import React from 'react';
import * as S from './SignUpAs.styles'

const SignUpAs = () => {

  const handleIamATeacher = () => {
    window.location.assign('/teachers/sign-up')
  }

  const handleIamAStudent = () => {
     window.location.assign('/students/sign-up');
  }

  return (
    <S.Box  >
      <Container as={SimpleGrid} maxW={'2xl'}>
        <S.SignUpAsTitleContainer>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              Welcome!
            </Text>
           
          </Heading>
           <Text fontSize="md" as={'span'} bgGradient="linear(to-r, black,pink.400)" bgClip="text">
              Want to be a part of Wisdom Learning Journey ?! <br/>
First tell me, are you a teacher or student ?
            </Text>
        </S.SignUpAsTitleContainer>

        <Box as="form" mt={10}>
          <S.SignUpAsFormContainer>
          <S.ButtonContainer>
            <S.ButtonComponent bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id:'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }} 
              type="button" 
              onClick={handleIamATeacher}>
              I am a teacher
            </S.ButtonComponent>
            <S.ButtonComponent bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id:'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }} 
              type="button" 
              onClick={handleIamAStudent}>
              I am a student
            </S.ButtonComponent>
          </S.ButtonContainer>

            <S.AlreadyHaveAnAccountContainer>
              Already have an account? 
            <Link variant="underline"
            href="/teachers/login"
            color="pink.400"
            >Login as teacher</Link>
            <Link variant="underline"
            href="/students/login"
            color="pink.400"
            >Login as student</Link>
            </S.AlreadyHaveAnAccountContainer>
          </S.SignUpAsFormContainer>
        </Box>
      </Container>
    </S.Box>
  );
};

export default SignUpAs;
