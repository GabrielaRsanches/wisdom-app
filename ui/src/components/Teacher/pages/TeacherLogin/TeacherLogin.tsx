import {
  FormControl,
  Input,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link
} from '@chakra-ui/react'
import { PasswordField } from '../../../helpers/PasswordField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TeacherLoginInterface } from 'ui/src/components/helpers/interfaces';
import * as S from './TeacherLogin.styles'

const TeacherLogin = () => {
  const [formData, setFormData] = useState<TeacherLoginInterface | null>(null);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<TeacherLoginInterface>();

  const handleLogin = async (data: TeacherLoginInterface) => {
    try {
      console.log(data);
      setFormData(data);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <Box position={'relative'} >
      <Container as={SimpleGrid} maxW={'2xl'}>
        <S.LoginTitleContainer>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              Welcome teacher!
            </Text>
          </Heading>
        </S.LoginTitleContainer>

        <Box as="form" mt={10}>
          <S.LoginFormContainer>
            <Stack spacing={4}>
              <FormControl isRequired id="email">
                <Input
                  type="text"
                  placeholder="Registered e-mail"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  {...register('email', {
                    required: 'Email is required'
                  })}
                />
              </FormControl>

              <PasswordField
                id="password"
                isRequired
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{ color: 'gray.500' }}
                {...register('password', { required: 'Password is required' })}
              />
            </Stack>
            <S.ForgotYourPasswordContainer>
              
            <Link variant="underline"
            href=""
            color="red.400">Forgot your password ?</Link>

            </S.ForgotYourPasswordContainer>
     
            <S.SubmitButton bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id:'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }} 
              isLoading={isSubmitting} 
              type="submit" 
              onClick={handleSubmit(handleLogin)}>
              Login
            </S.SubmitButton>
          </S.LoginFormContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default TeacherLogin;
