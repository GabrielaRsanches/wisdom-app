import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Checkbox,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateQuestion } from '../../../../hooks/usePostCreateQuestion'; 
import { QuestionInterface } from '../../../../../../shared/interfaces'; 
import { Subject } from '../../../../../../shared/enum'; 
import * as S from './CreateQuestion.styles';
import { useParams } from 'react-router-dom';

const CreateQuestion = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const [selectedSubject, setSelectedSubject] = useState<Subject | string>('');
  const subjects = Object.values(Subject);
  const toast = useToast();

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<QuestionInterface>();

  if (!studentId) {
    toast({
      title: 'Error.',
      description: 'Student ID is required.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    return null;
  }

  const { mutate: createQuestion } = useCreateQuestion(studentId, {
    onSuccess: () => {
      toast({
        title: 'Question posted.',
        description: 'Your question has been successfully posted.',
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
    if (!selectedSubject) {
      toast({
        title: 'Subject is required',
        description: 'Please select a subject.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    createQuestion({
      ...data,
      subject: selectedSubject,
      studentId,
    });
  };

  return (
    <Box position={'relative'}>
      <Container as={SimpleGrid} maxW={'2xl'}>
        <S.CreateQuestionTitleContainer>
          <Heading lineHeight={1.1} fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Ask a <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              question
            </Text>
          </Heading>
        </S.CreateQuestionTitleContainer>

        <Box as="form" mt={10} onSubmit={handleSubmit(onSubmit)}>
          <S.CreateQuestionFormContainer>
            <Stack spacing={4}>
              <FormControl isRequired id="title">
                <Input
                  type="text"
                  placeholder="Title"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  {...register('title', {
                    required: 'This is required',
                    minLength: { value: 4, message: 'Minimum length should be 4' },
                  })}
                />
              </FormControl>

              <FormControl isRequired id="description">
                <Input
                  type="text"
                  placeholder="Description"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{ color: 'gray.500' }}
                  {...register('description', { required: 'This is required' })}
                />
              </FormControl>

              <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <S.SubjectOptionsContainer>
                   <Stack>
                      {subjects.map((subject) => (
                      <Checkbox
                        colorScheme="pink"
                        key={subject}
                        value={subject}
                        isChecked={selectedSubject === subject}
                        onChange={() => handleSubjectChange(subject)}
                      >
                        {subject}
                      </Checkbox>
                    ))}
                    </Stack>
                  </S.SubjectOptionsContainer>
              </FormControl>
            </Stack>

            <S.SubmitButton bgGradient="linear(to-r, red.400,pink.400)"
              color="white"
              _hover={{
                id: 'submit',
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              isLoading={isSubmitting}
              type="submit">
              Submit
            </S.SubmitButton>
          </S.CreateQuestionFormContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateQuestion;
