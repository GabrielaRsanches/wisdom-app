import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Checkbox,
  CheckboxGroup,
  useToast
} from '@chakra-ui/react';
import onFileSelected, { ConfirmedPassword } from '../../../helpers/utils';
import { PasswordField } from '../../../helpers/PasswordField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TeacherRegistry } from '../../../helpers/interfaces';
import { TeachingArea } from '../../../helpers/enum'; 
import * as S from './TeacherSignUp.styles';
import { usePostCreateTeacher } from '../../../../hooks/usePostCreateTeacher';

const TeacherSignUp = () => {
  const [selectedCredential, setSelectedCredential] = useState<Credential[]>([]);
  const [selectedTeachingArea, setSelectedTeachingArea] = useState<TeachingArea[]>([]);
  const teachingAreas = Object.values(TeachingArea);
  const toast = useToast();

  const handleCredentialChange = (value: Credential[]) => {
    setSelectedCredential(value);
  };

  const handleTeachingAreaChange = (areas: TeachingArea[]) => {
    setSelectedTeachingArea(areas);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<TeacherRegistry>();

  const { mutate: createTeacher } = usePostCreateTeacher({
    onSuccess: () => {
      toast({
        title: 'Account created.',
        description: 'Your account has been successfully created.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error.',
        description: error.response?.data?.message || 'An error occurred.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const onSubmit = async (data: any) => {
    const confirmedPassword = new ConfirmedPassword(data.password, data.confirmPassword);
    if (!confirmedPassword.arePasswordsMatching(data.password, data.confirmPassword)) {
      toast({
        title: 'Password mismatch',
        description: 'Password and confirm password need to have the same value',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    createTeacher({
      ...data,
      teachingAreas: selectedTeachingArea,
      credentials: selectedCredential,
    });
  };

  return (
    <Box position={'relative'}>
      <Container as={SimpleGrid} maxW={'2xl'}>
        <S.SignUpTitleContainer>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Create your <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              account
            </Text>
          </Heading>
        </S.SignUpTitleContainer>

        <Box as="form" mt={10} onSubmit={handleSubmit(onSubmit)}>
          <S.SignUpFormContainer>
            <Stack spacing={4}>
              <FormControl isRequired id="name">
                <Input
                  type="text"
                  placeholder="First and last name"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  {...register('name', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
              </FormControl>

              <FormControl isRequired id="email">
                <Input
                  type="email"
                  placeholder="Your best email"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  {...register('email', { required: 'This is required' })}
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
                {...register('password', { required: 'This is required' })}
              />
              <PasswordField
                id="confirm-password"
                isRequired
                placeholder="Confirm password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{ color: 'gray.500' }}
                {...register('confirmPassword', { required: 'This is required' })}
              />

              <FormControl>
                <S.TeachingAreaContainer>
                  <FormLabel>Teaching areas</FormLabel>
                  <S.TeachingAreaOptionsContainer>
                    <CheckboxGroup
                      colorScheme="pink"
                      value={selectedTeachingArea}
                      onChange={handleTeachingAreaChange}
                    >
                      {teachingAreas.map((area) => (
                        <Checkbox key={area} value={area}>
                          {area}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </S.TeachingAreaOptionsContainer>
                </S.TeachingAreaContainer>
              </FormControl>

              <S.FileInputWrapper>
                <S.FileInputText>Upload your license legal document</S.FileInputText>
                <S.FileInputDescription>This information is secure and will not be shared</S.FileInputDescription>
                <Input
                  id="file"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  type="file"
                  onChange={onFileSelected}
                  marginTop={'1em'}
                />
              </S.FileInputWrapper>
            </Stack>

            <S.SubmitButton bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id:'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }} 
              isLoading={isSubmitting} 
              type="submit">
              Submit
            </S.SubmitButton>
          </S.SignUpFormContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default TeacherSignUp;
