import {
  FormControl,
  Input,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from '@chakra-ui/react';
import { PasswordField } from '../../../../helpers/PasswordField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TeacherLoginInterface } from 'ui/src/helpers/interfaces';
import { useTeacherLogin } from '../../../../hooks/useTeacherLogin';
import * as S from './TeacherLogin.styles';

const TeacherLogin = () => {
  const [loginError, setLoginError] = useState('');

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<TeacherLoginInterface>();

  const { mutate: loginTeacher } = useTeacherLogin({
    onSuccess: (data: any) => {
      console.log('Login successful:', data);
      setLoginError('');

      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('teacherInfo', JSON.stringify(data.teacher));
      
      window.location.href = '/teacher/dashboard';
    },
    onError: (error: any) => {
      setLoginError(error?.message || 'Login failed. Please try again.');
    },
  });

  const handleLogin = (data: TeacherLoginInterface) => {
    setLoginError('');
    loginTeacher(data);
  };

  return (
    <Box position={'relative'}>
      <Container as={SimpleGrid} maxW={'2xl'}>
        <S.LoginTitleContainer>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              Welcome teacher!
            </Text>
          </Heading>
        </S.LoginTitleContainer>

        <Box as="form" mt={10} onSubmit={handleSubmit(handleLogin)}>
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
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && <Text color="red.500">{errors.email.message}</Text>}
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
              {errors.password && <Text color="red.500">{errors.password.message}</Text>}
            </Stack>

            {loginError && <Text color="red.500">{loginError}</Text>}

            <S.ForgotYourPasswordContainer>
              <Link variant="underline" href="" color="red.400">
                Forgot your password?
              </Link>
            </S.ForgotYourPasswordContainer>

            <S.SubmitButton
              bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id: 'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              isLoading={isSubmitting}
              type="submit"
            >
              Login
            </S.SubmitButton>
          </S.LoginFormContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default TeacherLogin;
