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

  const AlreadyHaveAnAccount = async () => {
   
  };

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
              type="submit" 
              onClick={() => {}}>
              I am a teacher
            </S.ButtonComponent>
            <S.ButtonComponent bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id:'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }} 
              type="submit" 
              onClick={() => {}}>
              I am a student
            </S.ButtonComponent>
          </S.ButtonContainer>

            <S.AlreadyHaveAnAccountContainer>
              
            <Link variant="underline"
            href=""
            color="linear(to-r, red.400,pink.400)"
            >Already have an account? Login here</Link>

            </S.AlreadyHaveAnAccountContainer>
          </S.SignUpAsFormContainer>
        </Box>
      </Container>
    </S.Box>
  );
};

export default SignUpAs;
